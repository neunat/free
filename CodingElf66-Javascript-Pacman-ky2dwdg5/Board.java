import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Random;
import javax.swing.*;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.Font;
import java.io.InputStream;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Collections;
import java.util.Comparator;

public class Board extends JPanel implements ActionListener, KeyListener 
{
  /*
  Data Save Stuff
  */
    private String initials = "   ";
    private int PlayerRanking = -1;
    private int key;
    private FileWriter writer; // Creates the memory space for the variable that writes to GameData
    private StringBuilder SAVE_DATA = new StringBuilder(); // Creates the strings saved to GameData
    private BufferedReader reader; // Reader to read lines from GameData.csv
    private ArrayList<String> GameData = new ArrayList<String>(); // Hold the data
    private ArrayList<String> InitialsList = new ArrayList<String>(); // Hold the top scoring initials
    private ArrayList<String> HighScores = new ArrayList<String>(); // Hold the top scoring scores
    private ArrayList<GameData> SortedData = new ArrayList<>();
    private boolean dataWasSaved;
    private boolean getInitials;
    private boolean saveData;
  /*
  Initial Instance Variables
  */
    // controls the delay between each tick in ms
    private final int DELAY = 10;
    // controls the delay between each animation
    private final int ANIMATION = 125;
    // controls how long points stay on screen
    //private final int POINTS = 500;
    // controls the delay between movement (the speed)
    private final int POSITION = 60;
    // controls the delay between the ghosts movements when in bluemode
    private final int BLUEMODE = 160;
    // control the delay between ghost movements when eaten
    private final int EATEN = 80;
    // control the delay between the ghosts movements while exiting the ghost house
    private final int EXIT = 80;
    // control the speed of the intro screen sprite's movement
    private final int INTRO = 80;

    // controls the size of the board
    public static final int TILE_SIZE = 1;
    public static final int ROWS = 592;
    public static final int COLUMNS = 448;

    // controls the value of each dot
    public static final int COINS_VALUE = 10;
    // controls the value of each pellet
    public static final int PELLET_VALUE = 50;

    // controls the amount of coins currently on the board
    public static int current_coins = 0;
    // controls the game's current level
    public static int level = 1;
    // controls the speed of all of the characters when the mode is normal
    public static int speed = 110;

    // suppress serialization warning
    private static final long serialVersionUID = 490905409104883233L;

    // keep track of the player's current position
    private Point currPos;
    // keep tract of the player's previous position
    private Point oldPos;
    // Control if ghosts are in the box
    private boolean ghostsInBox;
    // Wait for the player to press a specific key to restart
    private boolean waitForKeyStroke;
    // Determines whether or not the player has completed the map/level
    private boolean finished_map = false;
    // Tells the program that it just started and to do the intro screen first
    private boolean justStarted;
    // Tells the program the animated sprites don't exist
    private boolean animNotInitialized;
    // Tells the program to wait for the animated sprites to leave the screen
    private boolean waitForSpritesToLeave;
    private boolean blueAnimation = false;
    private boolean normalAnimation = true;
    private boolean gameOver = false;
    private boolean drawOnce;
    private boolean drawScores;
    private boolean onlyDoThisOnce;
    private boolean fruitVisible;
    private boolean levelUp;
    
    // keep a reference to the timer object that triggers actionPerformed() in
    // case we need access to it in another method
    private Timer timer;
    // Timer to animate the initial graphics (intro screen)
    private Timer intro;
    // Timer to display consumed points on the screen for longer
    private Timer dispPoints;
    // Timer to animate the user
    private Timer animate;
    // Timer to move the user position
    private Timer position;
    // Timer to make the ghosts move slower in blue mode
    private Timer blueMode;
    // Timer to have the ghosts navigate to the ghost house quickly
    private Timer eaten;
    // Timer to have the ghosts exit the ghost house
    private Timer exit;

    // objects that appear on the game board
    private Player player;
    private Ghost blinky;
    private Ghost pinky;
    private Ghost inky;
    private Ghost clyde;
    private Ghost p, b, i, c;
    private Player pac;
    private Fruit fruit;
    private ArrayList<Coin> coins;
    private ArrayList<Integer> LevelCounter;
    private ArrayList<Coin> introCoins = new ArrayList<Coin>();
    private ArrayList<Coin> power_pellets;
    private ArrayList<Ghost> ghosts;
    private ArrayList<Ghost> introGhosts = new ArrayList<Ghost>();

    // Arraylists to help ghosts exit the box
    private ArrayList<Integer> blinkyExit = new ArrayList<Integer>();
    private ArrayList<Integer> pinkyExit = new ArrayList<Integer>();
    private ArrayList<Integer> inkyExit = new ArrayList<Integer>();
    private ArrayList<Integer> clydeExit = new ArrayList<Integer>();

    // ArrayList to manage the level counter (fruit displayed below map)
    //private static ArrayList<String> FruitList = new ArrayList<String>();
  /*
  Main Program
  */
    public Board() 
    {
        // set the game board size
        setPreferredSize(new Dimension(TILE_SIZE * COLUMNS, TILE_SIZE * ROWS));

        // Create counter
        LevelCounter = new ArrayList<Integer>();
        LevelCounter.add(1);

        // initialize the game state
        dataWasSaved = false;
        justStarted = true;
        levelUp = false;
        animNotInitialized = true;
        waitForSpritesToLeave = false;
        blueAnimation = false;
        normalAnimation = true;
        gameOver = false;
        drawOnce = true;
        getInitials = false;
        saveData = false;
        dataWasSaved = false;
        drawScores = false;
        fruitVisible = false;
        getGameData();
        Player.updateHighScore(Integer.valueOf(HighScores.get(0)));

        // Create the game's objects
        player = new Player();

        blinky = new Ghost("Blinky"); // Blinky
        pinky = new Ghost("Pinky"); // Pinky
        inky = new Ghost("Inky"); // Inky
        clyde = new Ghost("Clyde"); // Clyde
        fruit = new Fruit(); // Fruit (8 Different Fruits)

        ghostsInBox = true; // Ghosts at Home
        waitForKeyStroke = false; // Don't wait
        
        currPos = player.getPos();

        ghosts = new ArrayList<Ghost>(); // Store ghosts

        // Suck the ghosts into the array like in ghostbusters
        ghosts.add(blinky);
        ghosts.add(pinky);
        ghosts.add(inky);
        ghosts.add(clyde);

        setUpExits(); // Set up the exit paths for the ghosts

        coins = populateDots(); // Populate the dots

        // this timer will call the actionPerformed() method every DELAY ms
        timer = new Timer(DELAY, this);
        timer.start();

        // this timer will call the updateImage() method every ANIMATION ms
        animate = new Timer(ANIMATION, new ActionListener()
        {
          @Override
          public void actionPerformed(ActionEvent e) 
          {
            // Animate the sprites
            if (!(killedPacMan()))
            {
              player.updateImage();
              blinky.updateImage();
              pinky.updateImage();
              inky.updateImage();
              clyde.updateImage();
            }
            else
            {
              blinky.invisible();
              pinky.invisible();
              inky.invisible();
              clyde.invisible();
              player.updateDeath();
            }
            if ((fruit.isEaten() && fruitVisible))
            {
              fruitVisible = false;
            }
            fruit.updateImage();

            if (!(animNotInitialized) && justStarted)
            {
              if (pac.getX()>88 && pac.getX()<360)
              {
                pac.updateImage();
              }
              else
              {
                pac.invisible();
              }
              if (b.getX()>88 && b.getX()<360)
              {
                b.updateImage();
              }
              else
              {
                if (b.isEaten())
                {
                  b.getUnEaten();
                }
                b.invisible();
              }
              if (p.getX()>88 && p.getX()<360)
              {
                p.updateImage();
              }
              else
              {
                if (p.isEaten())
                {
                  p.getUnEaten();
                }
                p.invisible();
              }
              if (i.getX()>88 && i.getX()<360)
              {
                i.updateImage();
              }
              else
              {
                if (i.isEaten())
                {
                  i.getUnEaten();
                }
                i.invisible();
              }
              if (c.getX()>88 && c.getX()<360)
              {
                c.updateImage();
              }
              else
              {
                if (c.isEaten())
                {
                  c.getUnEaten();
                }
                c.invisible();
              }
            }
          }
        }
        );
        animate.start(); // Start animation

        // this timer will call the updatePosition() method every POSITION ms
        position = new Timer(POSITION+speed, new ActionListener()
        {
          @Override 
          public void actionPerformed(ActionEvent e)
          {
            checkFruitEaten();

            if (!(Ghost.currentlyBlueMode()) && !(justStarted))
            {
              // Have ghosts move relative to Pac-Man & fix collisions
              if (blinkyExit.isEmpty() && !(blinky.isEaten()))
              {
                blinky.respondToPacman(blinky.getPos());
                blinky.goForward(blinky.getDirection());
              }

              if (pinkyExit.isEmpty() && !(pinky.isEaten()))
              {
                pinky.respondToPacman(pinky.getPos());
                pinky.goForward(pinky.getDirection());
              }

              if (inkyExit.isEmpty() && !(inky.isEaten()))
              {
                inky.respondToPacman(blinky.getPos());
                inky.goForward(inky.getDirection());
              }

              if (clydeExit.isEmpty() && !(clyde.isEaten()))
              {
                clyde.respondToPacman(clyde.getPos());
                clyde.goForward(clyde.getDirection());
              }

              blinky.fixCollision();
              pinky.fixCollision();
              inky.fixCollision();
              clyde.fixCollision();
            }

            if (!(killedPacMan()))
            {
              if (!(player.checkCollision(player.getWantedDirection()))) // If player won't collide in preferred direction
              { // Go forward in preferred direction
                player.goForward(player.getWantedDirection());
              }
              else // If the player does collide in preferred direction
              {
                if (!(player.checkCollision(player.getDirection()))) // If player doesn't collide in current direction
                { // Keep going in current direction
                  player.goForward(player.getDirection());
                }
              }
              player.fixCollision(); // Fix any collisions
            }

            if (justStarted && !(animNotInitialized))
            {
              pac.goForward(4);
              if (!(Ghost.currentlyBlueMode()))
              {
                b.goForward(4);
                p.goForward(4);
                i.goForward(4);
                c.goForward(4);
              }
              else
              {
                if(pac.getX()>88 && pac.getX()<360)checkIntroGhostsEaten();
              }
            }
            repaint(); // Repaint the graphics
          }
        }
        );
        position.start(); // Start the sprite movement

        // this timer will have the ghosts move slowly after the player eats a power pellet
        blueMode = new Timer(BLUEMODE+speed, new ActionListener()
        {
          @Override
          public void actionPerformed(ActionEvent e)
          {
            if (Ghost.currentlyBlueMode() && !(justStarted))
            {
              // Have ghosts move slowly during blue mode (scatter mode)
              if (blinkyExit.isEmpty() && !(blinky.isEaten()))
              {
                blinky.respondToPacman(blinky.getPos());
                blinky.goForward(blinky.getDirection());
              }

              if (pinkyExit.isEmpty() && !(pinky.isEaten()))
              {
                pinky.respondToPacman(pinky.getPos());
                pinky.goForward(pinky.getDirection());
              }

              if (inkyExit.isEmpty() && !(inky.isEaten()))
              {
                inky.respondToPacman(blinky.getPos());
                inky.goForward(inky.getDirection());
              }

              if (clydeExit.isEmpty() && !(clyde.isEaten()))
              {
                clyde.respondToPacman(clyde.getPos());
                clyde.goForward(clyde.getDirection());
              }

              blinky.fixCollision();
              pinky.fixCollision();
              inky.fixCollision();
              clyde.fixCollision();

              repaint(); // Repaint the graphics
            }
            else if (Ghost.currentlyBlueMode() && justStarted && !(animNotInitialized))
            {
              b.goForward(4);
              p.goForward(4);
              i.goForward(4);
              c.goForward(4);
            }
          }
        }
        );
        blueMode.start(); // Move the ghosts slowly during blue mode

        exit = new Timer(EXIT+speed, new ActionListener()
        {
          @Override 
          public void actionPerformed(ActionEvent e)
          {
            if (!(justStarted))
            {
              if (blinky.isInBox() && blinkyExit.isEmpty())setUpExits("Blinky");
              else if (pinky.isInBox() && pinkyExit.isEmpty())setUpExits("Pinky");
              else if (inky.isInBox() && inkyExit.isEmpty())setUpExits("Inky");
              else if (clyde.isInBox() && clydeExit.isEmpty())setUpExits("Clyde");

              // Have ghosts move in a specific order to exit the ghost house
              if (player.getDirection() != 0 && !(blinkyExit.isEmpty()))
              {
                blinky.goForward(blinkyExit.get(0));
                blinkyExit.remove(0);
                if (blinkyExit.isEmpty())blinky.exitBox();
                blinky.fixCollision();
              }
              if (player.getDirection() != 0 && blinkyExit.isEmpty() && !(pinkyExit.isEmpty()))
              {
                pinky.goForward(pinkyExit.get(0));
                pinkyExit.remove(0);
                if (pinkyExit.isEmpty())pinky.exitBox();
              }
              if (player.getDirection() != 0 && pinkyExit.isEmpty() && !(inkyExit.isEmpty()))
              {
                inky.goForward(inkyExit.get(0));
                inkyExit.remove(0);
                if (inkyExit.isEmpty())inky.exitBox();
              }
              if (player.getDirection() != 0 && inkyExit.isEmpty() && !(clydeExit.isEmpty()))
              {
                clyde.goForward(clydeExit.get(0));
                clydeExit.remove(0);
                if (clydeExit.isEmpty())clyde.exitBox();
              }

              blinky.fixCollision();
              pinky.fixCollision();
              inky.fixCollision();
              clyde.fixCollision();

              repaint(); // Repaint the graphics
            }
          }
        }
        );
        exit.start(); // Have ghosts leave the box on repeat

        // Run when ghost is eaten by player
        eaten = new Timer(EATEN, new ActionListener()
        {
          @Override 
          public void actionPerformed(ActionEvent e)
          {
            if (!(justStarted))
            {
              // Have ghosts head straight home after eaten
              if (blinkyExit.isEmpty() && blinky.isEaten())
              {
                blinky.respondToPacman(blinky.getPos());
                blinky.goForward(blinky.getDirection());
              }
              if (pinkyExit.isEmpty() && pinky.isEaten())
              {
                pinky.respondToPacman(pinky.getPos());
                pinky.goForward(pinky.getDirection());
              }
              if (inkyExit.isEmpty() && inky.isEaten())
              {
                inky.respondToPacman(blinky.getPos());
                inky.goForward(inky.getDirection());
              }
              if (clydeExit.isEmpty() && clyde.isEaten())
              {
                clyde.respondToPacman(clyde.getPos());
                clyde.goForward(clyde.getDirection());
              }

              blinky.fixCollision();
              pinky.fixCollision();
              inky.fixCollision();
              clyde.fixCollision();

              repaint(); // Repaint the graphics
            }
          }
        }
        );
        eaten.start(); // Quickly move the ghosts back to the box after being eaten

        // Run when ghost is eaten by player
        intro = new Timer(INTRO+speed, new ActionListener()
        {
          @Override 
          public void actionPerformed(ActionEvent e)
          {
            if (justStarted && !(animNotInitialized))
            {
              if ((c.getX()<88 && normalAnimation) || (b.getX()<88 && blueAnimation))
              {
                b.invisible();
                p.invisible();
                i.invisible();
                c.invisible();
                pac.invisible();

                if(normalAnimation) // If mode is normal
                {
                  normalAnimation = false;
                  blueAnimation = true;

                  pac.setPosition(500, 296);
                  b.setPosition(pac.getX()-48, 296);
                  p.setPosition(b.getX()-32, 296);
                  i.setPosition(p.getX()-32, 296);
                  c.setPosition(i.getX()-32, 296);
                  waitForSpritesToLeave = true;
                }
                else if (blueAnimation)
                {
                  Ghost.blueMode(false);

                  blueAnimation = false;
                  normalAnimation = true;

                  pac.setPosition(360, 296);
                  b.setPosition(pac.getX()+32, 296);
                  p.setPosition(b.getX()+32, 296);
                  i.setPosition(p.getX()+32, 296);
                  c.setPosition(i.getX()+32, 296);
                  waitForSpritesToLeave = false;
                }

                if (introCoins.isEmpty() && !(waitForSpritesToLeave) && normalAnimation)
                {
                  //introCoins.add(new Coin(344, 304));
                  introCoins.add(new Coin(328, 304));
                  introCoins.add(new Coin(312, 304));
                  introCoins.add(new Coin(296, 304));
                  introCoins.add(new Coin(280, 304));
                  introCoins.add(new Coin(264, 304));
                  introCoins.add(new Coin(248, 304));
                  introCoins.add(new Coin(232, 304));
                  introCoins.add(new Coin(216, 304));
                  introCoins.add(new Coin(200, 304));
                  introCoins.add(new Coin(184, 304));
                  introCoins.add(new Coin(168, 304));
                  introCoins.add(new Coin(152, 304));
                  introCoins.add(new Coin(136, 304));
                  introCoins.add(new Coin(120, 304));
                  introCoins.add(new Coin(104, 304));
                  introCoins.add(new Coin("pellet", 88, 304));
                }
              }
            }
            repaint(); // Repaint the graphics
          }
        }
        );
        intro.start(); // Quickly move the ghosts back to the box after being eaten
    }
  /*
  Methods
  */
    @Override
    public void actionPerformed(ActionEvent e) 
    {
        // this method is called by the timer every DELAY ms.
        // use this space to update the state of your game or animation
        // before the graphics are redrawn.
        Player.updateHighScore(Integer.valueOf(HighScores.get(0)));
        if (!(justStarted))
        {
          current_coins = coins.size()-1;
          checkGhostKills();
          if (coins.isEmpty())
          {
            finished_map = true;
            fruitVisible = false;
            player.levelUp();
            level += 1;
            LevelCounter.add(level);
            if (LevelCounter.size()>7) LevelCounter.remove(0);
            if(speed+80>126) speed -= 2;

            blinky = new Ghost("Blinky");
            pinky = new Ghost("Pinky");
            inky = new Ghost("Inky");
            clyde = new Ghost("Clyde");
            fruit = new Fruit();

            ghosts = new ArrayList<Ghost>();
            ghosts.add(blinky);
            ghosts.add(pinky);
            ghosts.add(inky);
            ghosts.add(clyde);

            for (int i=0; i<ghosts.size(); i++)
            {
              ghosts.remove(i);
              if(i>0)i--;
            }

            ghosts.add(blinky);
            ghosts.add(pinky);
            ghosts.add(inky);
            ghosts.add(clyde);

            ghostsInBox = true;

            setUpExits();

            coins = populateDots();
            current_coins = coins.size()-1;
            finished_map = false;
            levelUp = true;
          }

          if (current_coins>0 && current_coins<122 && !(fruit.isEaten()) && !(fruitVisible))
          {
            fruit.start();
            fruitVisible = true;
          }

          if (killedPacMan() && !(Ghost.currentlyBlueMode()))
          {
            player.setDirection(0);
            if (player.getDeathAnimation() && killedPacMan())
            {
              if (player.getLives()-1==0)
              {
                waitForKeyStroke = true;
                drawOnce = true;
              }
              else
              {
                restartPacMan();
                player.restart();
                blinky = new Ghost("Blinky");
                pinky = new Ghost("Pinky");
                inky = new Ghost("Inky");
                clyde = new Ghost("Clyde");

                currPos = player.getPos();

                ghosts = new ArrayList<Ghost>(); // Store   ghosts

                // Suck the ghosts into the array like in  ghostbusters
                ghosts.add(blinky);
                ghosts.add(pinky);
                ghosts.add(inky);
                ghosts.add(clyde);

                ghostsInBox = true;
                setUpExits();
              }
            }
          }

          if (clydeExit.isEmpty())ghostsInBox = false;

          // prevent the player from disappearing off the board
          player.tick();
          blinky.tick();
          pinky.tick();
          inky.tick();
          clyde.tick();
          fruit.tick();

          oldPos = currPos;
          currPos = player.getPos();

          // give the player points for collecting coins
          collectDots();

          // give the ghosts the player's information
          if(player.getDirection()!=0 && !(ghostsInBox))
          {
            giveGhostsInfo();
          }

          // calling repaint() will trigger paintComponent() to run again,
          // which will refresh/redraw the graphics.
        }
        else
        {
          collectTempDots();
        }
        repaint();
    }

    @Override
    public void paintComponent(Graphics g) 
    {
        super.paintComponent(g);
        // Run the intial graphics
        if (justStarted)
        {
          if (drawOnce = true)
          {
            drawBackground(g, "images/Black.png");
            drawInitialGraphics(g);
            drawOnce = false;
          }

          for (Coin coin : introCoins)
          {
            coin.draw(g, this); // Coins drawed first so 
          }
          if (justStarted && !(animNotInitialized))
          {
            b.draw(g, this);
            p.draw(g, this);
            i.draw(g, this);
            c.draw(g, this);
            pac.draw(g, this);
          }
        }
        else
        {
          if (true) // Always draw these
          {
            drawBackground(g, "images/Pacman-Map.png");
            // draw our graphics.
            drawLives(g);
            drawFruitCounter(g);
            for (Coin coin : coins) 
            {
              coin.draw(g, this);
            }
            blinky.draw(g, this);
            pinky.draw(g, this);
            inky.draw(g, this);
            clyde.draw(g, this);
            fruit.draw(g, this);
            player.draw(g, this);

            drawScore(g);
          }

          if (ghostsInBox && player.getX() == 208)
          {
            displayStartMessage(g);
          }

          if (waitForKeyStroke && drawOnce && !(gameOver))
          {
            displayRestartMessage(g);
            drawOnce = false;
          }
          else if (saveData && !(dataWasSaved) && !(drawScores) && drawOnce)
          {
            for (int i=9; i>0; i--)
            {
              if (Player.getScoreInt()>Integer.valueOf(HighScores.get(i-1)))
              {
                HighScores.set(i, HighScores.get(i-1));
                InitialsList.set(i, InitialsList.get(i-1));
              }
            }
            HighScores.set(PlayerRanking, Player.getScore());
            InitialsList.set(PlayerRanking, initials);
            try (FileWriter writer = new FileWriter("GameData.csv", false)) 
            {
              for (int i=0; i<10; i++)
              {
                writer.append(HighScores.get(i)+", "+InitialsList.get(i));
                writer.append("\n");
                /*
                SAVE_DATA.append(HighScores.get(i)); // Save the high score
                SAVE_DATA.append(", "); // Separate between variables
                SAVE_DATA.append(InitialsList.get(i)); // Save the player's username
                SAVE_DATA.append('\n'); // Create a new line for the next save.
                writer.write(SAVE_DATA.toString());
                */
              }
              writer.flush();
              writer.close();
            }
            catch (Exception exc) 
            {
              System.out.println(exc.getMessage());
            }
            saveData = false;
            dataWasSaved = true;
            drawScores = true;
            drawOnce = false;
          }
          else if (gameOver)
          {
            if (!(getInitials) && !(saveData) && !(dataWasSaved) && !(drawScores))
            { 
              // WORKS
              for (int i=0; i<10; i++)
              {
                int pScore = Player.getScoreInt();
                int hScore = SortedData.get(i).getScore();
                if (pScore>hScore)
                {
                  PlayerRanking = i;
                  getInitials = true;
                  break;
                }
              }
              if (!(getInitials) && !(dataWasSaved) && !(drawScores))
              {
                drawBackground(g, "images/Black.png");
                drawHighScores(g);
              }
            }
            else if (!(getInitials) && dataWasSaved && drawScores)
            {
              drawBackground(g, "images/Black.png");
              drawHighScores(g);
              //drawOnce = false;
            }
            else if (getInitials && !(dataWasSaved))
            {
              drawBackground(g, "images/Black.png");
              drawInitialsScreen(g);
            }
          }
        }

        // this smooths out animations on some systems
        Toolkit.getDefaultToolkit().sync();
    }

    @Override
    public void keyTyped(KeyEvent e) 
    {
        // this is used to determine player initials for the score ranking
    }

    @Override
    public void keyPressed(KeyEvent e) 
    {
        if (!(gameOver) && !(justStarted) && !(waitForKeyStroke))
        {
          player.keyPressed(e);
          player.fixCollision();
        }

        if (justStarted && e.getKeyCode() == KeyEvent.VK_ENTER)
        {
          justStarted = false;
          Player.resetScores();
          Ghost.blueMode(false);
          drawOnce = true;
        }

        if (waitForKeyStroke && e.getKeyCode() == KeyEvent.VK_ENTER && !(gameOver))
        {
          gameOver = true;
          waitForKeyStroke = false;
        }
        else if (waitForKeyStroke && e.getKeyCode() == KeyEvent.VK_ENTER && gameOver && !(getInitials))
        {
          // initialize the game state
          level = 1;
          // Create counter
          LevelCounter = new ArrayList<Integer>();
          LevelCounter.add(1);
          initials = "   ";
          Ghost.blueMode(false);
          dataWasSaved = false;
          justStarted = false;
          animNotInitialized = false;
          waitForSpritesToLeave = false;
          blueAnimation = false;
          normalAnimation = true;
          gameOver = false;
          drawOnce = true;
          getInitials = false;
          saveData = false;
          dataWasSaved = false;
          drawScores = false;
          getGameData();
          Player.updateHighScore(Integer.valueOf(HighScores.get(0)));

          // Create the game's objects
          player.restart();

          blinky.reset();
          pinky.reset();
          inky.reset();
          clyde.reset();

          ghostsInBox = true; // Ghosts at Home
          waitForKeyStroke = false; // Don't wait

          currPos = player.getPos();

          ghosts = new ArrayList<Ghost>(); // Store ghosts

          // Suck the ghosts into the array like in ghostbusters
          ghosts.add(blinky);
          ghosts.add(pinky);
          ghosts.add(inky);
          ghosts.add(clyde);

          setUpExits(); // Set up the exit paths for the ghosts

          coins = populateDots(); // Populate the dots
          current_coins = coins.size()-1; // Count the dots
        }

        if (getInitials && !(saveData) && !(dataWasSaved))
        {
          key = e.getKeyCode();
          switch (key)
          {
            case(KeyEvent.VK_A):
              initials += "A";
              break;
            case(KeyEvent.VK_B):
              initials += "B";
              break;
            case(KeyEvent.VK_C):
              initials += "C";
              break;
            case(KeyEvent.VK_D):
              initials += "D";
              break;
            case(KeyEvent.VK_E):
              initials += "E";
              break;
            case(KeyEvent.VK_F):
              initials += "F";
              break;
            case(KeyEvent.VK_G):
              initials += "G";
              break;
            case(KeyEvent.VK_H):
              initials += "H";
              break;
            case(KeyEvent.VK_I):
              initials += "I";
              break;
            case(KeyEvent.VK_J):
              initials += "J";
              break;
            case(KeyEvent.VK_K):
              initials += "K";
              break;
            case(KeyEvent.VK_L):
              initials += "L";
              break;
            case(KeyEvent.VK_M):
              initials += "M";
              break;
            case(KeyEvent.VK_N):
              initials += "N";
              break;
            case(KeyEvent.VK_O):
              initials += "O";
              break;
            case(KeyEvent.VK_P):
              initials += "P";
              break;
            case(KeyEvent.VK_Q):
              initials += "Q";
              break;
            case(KeyEvent.VK_R):
              initials += "R";
              break;
            case(KeyEvent.VK_S):
              initials += "S";
              break;
            case(KeyEvent.VK_T):
              initials += "T";
              break;
            case(KeyEvent.VK_U):
              initials += "U";
              break;
            case(KeyEvent.VK_V):
              initials += "V";
              break;
            case(KeyEvent.VK_W):
              initials += "W";
              break;
            case(KeyEvent.VK_X):
              initials += "X";
              break;
            case(KeyEvent.VK_Y):
              initials += "Y";
              break;
            case(KeyEvent.VK_Z):
              initials += "Z";
              break;
            case(KeyEvent.VK_SPACE):
              initials += " ";
              break;
          } 
          if (initials.length()>3)
          { // "   M" --> "  M" // "JTMQ" --> "TMQ"
            initials = initials.substring(1);
          }
        }

        if (getInitials && e.getKeyCode() == KeyEvent.VK_ENTER && !(initials.equals("   ")))
        {
          getInitials = false;
          saveData = true;
          drawOnce = true;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) 
    {
      // react to key up events
    }

    private boolean killedPacMan()
    {
      for (int i=0; i<ghosts.size(); i++)
      {
        if (ghosts.get(i).killedPac())
        {
          return(true);
        }
      }
      return(false);
    }

    private void restartPacMan()
    {
      for (int i=0; i<ghosts.size(); i++)
      {
        ghosts.get(i).resetPacMan();
      }
    }
    
    private void setUpExits()
    {
      // Reset
      blinkyExit = new ArrayList<Integer>();
      pinkyExit = new ArrayList<Integer>();
      inkyExit = new ArrayList<Integer>();
      clydeExit = new ArrayList<Integer>();
      
      // Blinky
      blinkyExit.add(4);
      blinkyExit.add(4);
      blinkyExit.add(4);
      blinkyExit.add(4);
      blinkyExit.add(4);
      
      // Pinky
      pinkyExit.add(1);
      pinkyExit.add(1);
      pinkyExit.add(1);
      pinkyExit.add(4);
      pinkyExit.add(4);
      pinkyExit.add(4);
      // Inky
      inkyExit.add(2);
      inkyExit.add(2);
      inkyExit.add(1);
      inkyExit.add(1);
      inkyExit.add(1);
      inkyExit.add(4);
      inkyExit.add(4);
      // Clyde
      clydeExit.add(4);
      clydeExit.add(4);
      clydeExit.add(1);
      clydeExit.add(1);
      clydeExit.add(1);
      clydeExit.add(4);
    }

    private void setUpExits(String ghost)
    {
      // Blinky
      if (ghost.equals("Blinky"))
      {
        blinkyExit = new ArrayList<Integer>();
        blinkyExit.add(4);
        blinkyExit.add(4);
        blinkyExit.add(4);
        blinkyExit.add(4);
        blinkyExit.add(4);
      }

      // Pinky
      else if (ghost.equals("Pinky"))
      {
        pinkyExit = new ArrayList<Integer>();
        pinkyExit.add(1);
        pinkyExit.add(1);
        pinkyExit.add(1);
        pinkyExit.add(4);
        pinkyExit.add(4);
        pinkyExit.add(4);
      }

      // Inky
      else if (ghost.equals("Inky"))
      {
        inkyExit = new ArrayList<Integer>();
        inkyExit.add(2);
        inkyExit.add(2);
        inkyExit.add(1);
        inkyExit.add(1);
        inkyExit.add(1);
        inkyExit.add(4);
        inkyExit.add(4);
      }

      // Clyde
      else if (ghost.equals("Clyde"))
      {
        clydeExit = new ArrayList<Integer>();
        clydeExit.add(4);
        clydeExit.add(4);
        clydeExit.add(1);
        clydeExit.add(1);
        clydeExit.add(1);
        clydeExit.add(4);
      }
    }

    private void giveGhostsInfo()
    {
      for (int i=0; i<ghosts.size(); i++)
      {
        ghosts.get(i).setPacDirection(player.getWantedDirection());
        ghosts.get(i).setPacPosition(currPos);
        ghosts.get(i).setPacOldPosition(oldPos);
      }
    }

    private void checkGhostKills()
    {
      for (int i=0; i<ghosts.size(); i++)
      {
        if(player.getBounds().intersects(ghosts.get(i).getTileBounds()) && !(ghosts.get(i).isInBox()))
        {
          if(!(Ghost.currentlyBlueMode()) && !(ghosts.get(i).isEaten()) || ghosts.get(i).isNormal())
          {
            ghosts.get(i).killPacMan();
          }
          else if (!(ghosts.get(i).isEaten()))
          {
            ghosts.get(i).getEaten();
          }
        }
      }
    }

    private void checkFruitEaten()
    {
      if (player.getBounds().intersects(fruit.getBounds()) && fruitVisible && !(fruit.isEaten()))
      {
        fruit.getEaten(true);
      }
    }

    private void checkIntroGhostsEaten()
    {
      if (justStarted && Ghost.currentlyBlueMode())
      {
        for (int i=0; i<introGhosts.size(); i++)
        {
          if(pac.getBounds().intersects(introGhosts.get(i).getTileBounds()) && !(introGhosts.get(i).isInBox()))
          {
            if (!(introGhosts.get(i).isEaten()))
            {
              introGhosts.get(i).getEaten();
            }
          }
        }
      }
    }

    private void drawInitialsScreen(Graphics g)
    {
      // we need to cast the Graphics to Graphics2D to draw nicer text
      Graphics2D g2d = (Graphics2D) g;
      g2d.setRenderingHint(
          RenderingHints.KEY_TEXT_ANTIALIASING,
          RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
      g2d.setRenderingHint(
          RenderingHints.KEY_RENDERING,
          RenderingHints.VALUE_RENDER_QUALITY);
      g2d.setRenderingHint(
          RenderingHints.KEY_FRACTIONALMETRICS,
          RenderingHints.VALUE_FRACTIONALMETRICS_ON);

      drawScore(g);
      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      g2d.setColor(new Color(255, 178, 102)); // white
      g2d.drawString("YOU'RE ON THE SCOREBOARD", 80, 80); // Draw the title
      g2d.setColor(new Color(102, 255, 255)); // blue
      g2d.drawString("ENTER YOUR INITIALS:", 112, 144); // Initials Title
      g2d.setColor(new Color(255, 102, 102)); // red
      g2d.drawString(""+initials.substring(0, 1)+"   "+initials.substring(1, 2)+"   "+initials.substring(2), 192, 208);
      
      g2d.setColor(new Color(102, 255, 255)); // blue
      g2d.drawString("YOUR SCORE:", 160, 288);
      g2d.setColor(new Color(255, 102, 102)); // red
      g2d.drawString(Player.getScore(), 192, 352);
      
      g2d.setColor(new Color(255, 255, 255)); // white
      g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("PRESS 'ENTER' TO CONTINUE", 96, 484); // Draw start 'button'

      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      g2d.setColor(new Color(255, 102, 255)); // pink
      g2d.drawString("\u00A9 1980 MIDWAY MFG. CO.", 112, 536); // Draw copyright
      
      g2d.setColor(new Color(255, 255, 255)); // white
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("CREDITS  \u221E", 32, 584); // Draw current credits

      if (gameOver)
      {
        waitForKeyStroke = true;
      }
    }

    private void drawHighScores(Graphics g)
    {
      // we need to cast the Graphics to Graphics2D to draw nicer text
      Graphics2D g2d = (Graphics2D) g;
      g2d.setRenderingHint(
          RenderingHints.KEY_TEXT_ANTIALIASING,
          RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
      g2d.setRenderingHint(
          RenderingHints.KEY_RENDERING,
          RenderingHints.VALUE_RENDER_QUALITY);
      g2d.setRenderingHint(
          RenderingHints.KEY_FRACTIONALMETRICS,
          RenderingHints.VALUE_FRACTIONALMETRICS_ON);
      
      /* Draw the player/game stats
        RANK        SCORE        INITIAL
         1ST        30000        JTM
         2ND        18387        BOB
         3RD        476          PIL
      */

      drawScore(g);
      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      g2d.setColor(new Color(255, 255, 255)); // white
      g2d.drawString("THE TEN BEST PLAYERS", 112, 80); // Draw the title
      g2d.setColor(new Color(255, 178, 102)); // orange
      g2d.drawString("RANK        SCORE        INITIAL", 96, 112); // Draw  Rankings
      g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.setColor(new Color(255, 102, 102)); // red
      g2d.drawString(" 1ST         "+HighScores.get(0)+"            "+InitialsList.get(0), 104, 144); // Draw 1'st best
      g2d.setColor(new Color(255, 102, 255)); // pink
      g2d.drawString(" 2ND         "+HighScores.get(1)+"            "+InitialsList.get(1), 104, 176); // Draw 2'nd best
      g2d.setColor(new Color(102, 255, 255)); // blue
      g2d.drawString(" 3RD         "+HighScores.get(2)+"            "+InitialsList.get(2), 104, 208); // Draw 3'rd best
      g2d.setColor(new Color(255, 178, 102)); // orange
      g2d.drawString(" 4TH         "+HighScores.get(3)+"            "+InitialsList.get(3), 104, 240); // Draw 4'th best
      g2d.setColor(new Color(255, 255, 102)); // yellow
      g2d.drawString(" 5TH         "+HighScores.get(4)+"            "+InitialsList.get(4), 104, 272); // Draw 5'th best
      g2d.setColor(new Color(255, 102, 102)); // red
      g2d.drawString(" 6TH         "+HighScores.get(5)+"            "+InitialsList.get(5), 104, 304); // Draw 6'th best
      g2d.setColor(new Color(255, 102, 255)); // pink
      g2d.drawString(" 7TH         "+HighScores.get(6)+"           "+InitialsList.get(6), 104, 336); // Draw 7'th best
      g2d.setColor(new Color(102, 255, 255)); // blue
      g2d.drawString(" 8TH         "+HighScores.get(7)+"            "+InitialsList.get(7), 104, 368); // Draw 8'th best
      g2d.setColor(new Color(255, 178, 102)); // orange
      g2d.drawString(" 9TH         "+HighScores.get(8)+"            "+InitialsList.get(8), 104, 400); // Draw 9'th best
      g2d.setColor(new Color(255, 255, 102)); // yellow
      g2d.drawString("10TH        "+HighScores.get(9)+"             "+InitialsList.get(9), 104, 432); // Draw 10'th best
      
      g2d.setColor(new Color(255, 255, 255)); // white
      g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("PRESS 'ENTER' TO START", 112, 484); // Draw start 'button'

      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      g2d.setColor(new Color(255, 102, 255)); // pink
      g2d.drawString("\u00A9 1980 MIDWAY MFG. CO.", 112, 536); // Draw copyright
      
      g2d.setColor(new Color(255, 255, 255)); // white
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("CREDITS  \u221E", 32, 584); // Draw current credits

      if (gameOver)
      {
        waitForKeyStroke = true;
      }
    }

    private void getGameData()
    {
      SortedData = new ArrayList<>();
      int splitColumn, highLength, initLength;
      String highscore, initial, fakeH, fakeI;

      try
      {
        BufferedReader reader = new BufferedReader(new FileReader("GameData.csv"));
        String data = null;
        while ((data = reader.readLine()) != null) 
        {
          GameData.add(data);
        }
      }
      catch (IOException exc)
      {
        System.out.println("Error. "+exc);
      }
      
      for (int i=0; i<GameData.size(); i++)
      {
        splitColumn = GameData.get(i).indexOf(",");
        fakeI = GameData.get(i).substring(splitColumn+1);
        fakeH = GameData.get(i).substring(0, splitColumn);
        fakeI = fakeI.replaceAll(" ", "");
        fakeH = fakeH.replaceAll(" ", "");
        SortedData.add(new GameData(fakeI, Integer.valueOf(fakeH)));
        Collections.sort(SortedData, Collections.reverseOrder());
      }

      for (int i=0; i<SortedData.size(); i++)
      {
        highscore = ""+SortedData.get(i).getScore();
        highLength = highscore.length();
        /*
        if (highLength<8)
        {
          if (8-highLength == 7)highscore = "       "+highscore;
          else if (8-highLength == 6)highscore = "      "+highscore;
          else if (8-highLength == 5)highscore = "     "+highscore;
          else if (8-highLength == 4)highscore = "    "+highscore;
          else if (8-highLength == 3)highscore = "   "+highscore;
          else if (8-highLength == 2)highscore = "  "+highscore;
          else if (8-highLength == 1)highscore = " "+highscore;
        }
        */
        initial = ""+SortedData.get(i).getInitial();
        initLength = initial.length();
        /*
        if (initLength<8)
        {
          if (8-initLength == 7)initial = "       "+initial;
          else if (8-initLength == 6)initial = "      "+initial;
          else if (8-initLength == 5)initial = "     "+initial;
          else if (8-initLength == 4)initial = "    "+initial;
          else if (8-initLength == 3)initial = "   "+initial;
          else if (8-initLength == 2)initial = "  "+initial;
          else if (8-initLength == 1)initial = " "+initial;
        }
        */

        HighScores.add(highscore); // Add the HighScores in the order of highest score
        InitialsList.add(initial); // Add the Initials in the order of highest score
      }
    }

    private void drawInitialGraphics(Graphics g)
    {
      Image blinky, pinky, inky, clyde, dot, pellet;
      try
      {
        blinky = ImageIO.read(new File ("images/Blinky/Blinky-Right-1.png"));
        pinky = ImageIO.read(new File ("images/Pinky/Pinky-Right-1.png"));
        inky = ImageIO.read(new File ("images/Inky/Inky-Right-1.png"));
        clyde = ImageIO.read(new File ("images/Clyde/Clyde-Right-1.png"));
        dot = ImageIO.read(new File ("images/Dot.png"));
        pellet = ImageIO.read(new File ("images/PowerPellet.png"));
      }
      catch (IOException exc)
      {
        blinky = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        pinky = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        inky = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        clyde = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        dot = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        pellet = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        System.out.println("Error loading image file. "+exc.getMessage());
      }
      // we need to cast the Graphics to Graphics2D to draw nicer text
      Graphics2D g2d = (Graphics2D) g;
      g2d.setRenderingHint(
          RenderingHints.KEY_TEXT_ANTIALIASING,
          RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
      g2d.setRenderingHint(
          RenderingHints.KEY_RENDERING,
          RenderingHints.VALUE_RENDER_QUALITY);
      g2d.setRenderingHint(
          RenderingHints.KEY_FRACTIONALMETRICS,
          RenderingHints.VALUE_FRACTIONALMETRICS_ON);
      
      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      // draw the player/game stats
      drawScore(g);
      g2d.setColor(new Color(255, 255, 255)); // white
      g2d.drawString("CHARACTER  /  NICKNAME", 112, 112); // Draw the title

      g.drawImage(blinky, 80, 136, null);
      g2d.setColor(new Color(255, 102, 102)); // red
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("-SHADOW      \"BLINKY\"", 144, 160); // Draw  blinky stats
      
      g.drawImage(pinky, 80, 168, null);
      g2d.setColor(new Color(255, 102, 255)); // pink
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("-SPEEDY        \"PINKY\"", 144, 192); // Draw pinky stats
      
      g.drawImage(inky, 80, 200, null);
      g2d.setColor(new Color(102, 255, 255)); // blue
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("-BASHFUL      \"INKY\"", 144, 224); // Draw inky stats
      
      g.drawImage(clyde, 80, 232, null);
      g2d.setColor(new Color(255, 178, 102)); // orange
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("-POKEY          \"CLYDE\"", 144, 256); // Draw clyde stats
      
      g.drawImage(dot, 164, 384, null);
      g.drawImage(pellet, 164, 416, null);
      g2d.setColor(new Color(255, 255, 255)); // white
      g2d.drawString("10 PTS", 200, 400); // Draw dot value
      g2d.drawString("50 PTS", 200, 432); // Draw pellet value
      g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("PRESS 'ENTER' TO START", 112, 484); // Draw start 'button'

      g2d.setFont(new Font("Lato", Font.BOLD, 18));
      g2d.setColor(new Color(255, 102, 255)); // pink
      g2d.drawString("\u00A9 1980 MIDWAY MFG. CO.", 112, 536); // Draw copyright
      
      g2d.setColor(new Color(255, 255, 255)); // white
      //g2d.setFont(new Font("Lato", Font.ITALIC, 18));
      g2d.drawString("CREDITS  \u221E", 32, 584); // Draw current credits

      if (justStarted && animNotInitialized)
      {
        b = new Ghost("Blinky");
        p = new Ghost("Pinky");
        i = new Ghost("Inky");
        c = new Ghost("Clyde");
        pac = new Player();

        introGhosts.add(b);
        introGhosts.add(p);
        introGhosts.add(i);
        introGhosts.add(c);
        
        b.exitBox();
        p.exitBox();
        i.exitBox();
        c.exitBox();
        
        pac.setPosition(232, 296);
        b.setPosition(264, 296);
        p.setPosition(296, 296);
        i.setPosition(328, 296);
        c.setPosition(360, 296);
        
        pac.setDirection(4);
        b.setDirection(4);
        p.setDirection(4);
        i.setDirection(4);
        c.setDirection(4);

        introCoins.add(new Coin(216, 304));
        introCoins.add(new Coin(200, 304));
        introCoins.add(new Coin(184, 304));
        introCoins.add(new Coin(168, 304));
        introCoins.add(new Coin(152, 304));
        introCoins.add(new Coin(136, 304));
        introCoins.add(new Coin(120, 304));
        introCoins.add(new Coin(104, 304));
        introCoins.add(new Coin("pellet", 88, 304));
        
        waitForSpritesToLeave = true;
        animNotInitialized = false;
      }
    }

    private void drawBackground(Graphics g, String file) 
    {
      Image bground;
      if (!(justStarted))
      {
        bground = Toolkit.getDefaultToolkit().createImage("background.jpg");
        try
        {
          bground = ImageIO.read(new File (file));
        }
        catch (IOException exc)
        {
          System.out.println("Error loading image file. " + exc.getMessage());
        }
      }
      else
      {
        try
        {
          bground = ImageIO.read(new File ("images/Black.png"));
        }
        catch (IOException exc)
        {
          bground = Toolkit.getDefaultToolkit().createImage("initialBackground.jpg");
        }
      }
      g.drawImage(bground, 0, 0, null);
    }

    private void drawLives(Graphics g) 
    {
      Image bground;
      bground = Toolkit.getDefaultToolkit().createImage("lives.jpg");
      try
      {
        bground = ImageIO.read(new File ("images/Pac-Man/Pacman-Left-2.png"));
      }
      catch (IOException exc)
      {
        System.out.println("Error loading image file." + exc.getMessage());
      }
      
      if (player.getLives()>=5 && !(waitForKeyStroke))
      {
        g.drawImage(bground, 32, 552, null);
        g.drawImage(bground, 64, 552, null);
        g.drawImage(bground, 96, 552, null);
        g.drawImage(bground, 128, 552, null);
        g.drawImage(bground, 160, 552, null);
      }
      else if (player.getLives()==4 && !(waitForKeyStroke))
      {
        g.drawImage(bground, 32, 552, null);
        g.drawImage(bground, 64, 552, null);
        g.drawImage(bground, 96, 552, null);
        g.drawImage(bground, 128, 552, null);
      }
      else if (player.getLives()==3 && !(waitForKeyStroke))
      {
        g.drawImage(bground, 32, 552, null);
        g.drawImage(bground, 64, 552, null);
        g.drawImage(bground, 96, 552, null);
      }
      else if (player.getLives()==2 && !(waitForKeyStroke))
      {
        g.drawImage(bground, 32, 552, null);
        g.drawImage(bground, 64, 552, null);
      }
      else if (player.getLives()==1 && !(waitForKeyStroke))
      {
        g.drawImage(bground, 32, 552, null);
      }
    }

    private void drawFruitCounter(Graphics g) 
    {
      Image invisible, cherry, strawberry, peach, apple, melon, ship, bell, key;
      int x = 192;
      invisible = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      cherry = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      strawberry = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      peach = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      apple = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      melon = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      ship = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      bell = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      key = Toolkit.getDefaultToolkit().createImage("fruit.jpg");
      try
      {
        cherry = ImageIO.read(new File ("images/Fruits/Cherry.png"));
        strawberry = ImageIO.read(new File ("images/Fruits/Strawberry.png"));
        peach = ImageIO.read(new File ("images/Fruits/Peach.png"));
        apple = ImageIO.read(new File ("images/Fruits/Apple.png"));
        melon = ImageIO.read(new File ("images/Fruits/Melon.png"));
        ship = ImageIO.read(new File ("images/Fruits/GalaxianStarship.png"));
        bell = ImageIO.read(new File ("images/Fruits/Bell.png"));
        key = ImageIO.read(new File ("images/Fruits/Key.png"));
        invisible = ImageIO.read(new File ("images/Invisible.png"));
      }
      catch (IOException exc)
      {
        System.out.println("Error loading image file." + exc.getMessage());
      }
      int current = 0;
      Image image = invisible;
      for (int i=0; i<7-LevelCounter.size(); i++)
      {
        g.drawImage(image, x, 552, null);
        x += 32;
      }
      for (int j=LevelCounter.size()-1; j>=0; j--)
      {
        current = LevelCounter.get(j);
        if (current>=13) image = key;
        else if (current==11 || current==12) image = bell;
        else if (current==9 || current==10) image = ship;
        else if (current==7 || current==8) image = melon;
        else if (current==5 || current==6) image = apple;
        else if (current==3 || current==4) image = peach;
        else if (current==2) image = strawberry;
        else if (current==1) image = cherry;
        g.drawImage(image, x, 552, null);
        x += 32;
      }
    }

    private void displayStartMessage(Graphics g)
    {
        // set the text to be displayed
        String text_1 = "READY!";
        // we need to cast the Graphics to Graphics2D to draw nicer text
        Graphics2D g2d = (Graphics2D) g;
        g2d.setRenderingHint(
            RenderingHints.KEY_TEXT_ANTIALIASING,
            RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        g2d.setRenderingHint(
            RenderingHints.KEY_RENDERING,
            RenderingHints.VALUE_RENDER_QUALITY);
        g2d.setRenderingHint(
            RenderingHints.KEY_FRACTIONALMETRICS,
            RenderingHints.VALUE_FRACTIONALMETRICS_ON);
        // set the text color and font
        g2d.setColor(new Color(255, 204, 51));
        g2d.setFont(new Font("Lato", Font.BOLD, 18));
        // draw the score in the bottom center of the screen
        // https://stackoverflow.com/a/27740330/4655368
        FontMetrics metrics = g2d.getFontMetrics(g2d.getFont());
        // the text will be contained within this rectangle.
        // here I've sized it to be the entire bottom row of board tiles
        Rectangle rect_1 = new Rectangle(128, 268+48, 192, 24);
        // determine the x coordinate for the text
        int x_1 = rect_1.x + (rect_1.width - metrics.stringWidth(text_1)) / 2;

        // determine the y coordinate for the text
        // (note we add the ascent, as in java 2d 0 is top of the screen)
        int y_1 = rect_1.y + ((rect_1.height - metrics.getHeight()) / 2) + metrics.getAscent();
        // draw the string
        g2d.drawString(text_1, x_1, y_1);
    }

    private void displayRestartMessage(Graphics g)
    {
        // set the text to be displayed
        String text_1 = "Game Over!";
        // we need to cast the Graphics to Graphics2D to draw nicer text
        Graphics2D g2d = (Graphics2D) g;
        g2d.setRenderingHint(
            RenderingHints.KEY_TEXT_ANTIALIASING,
            RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        g2d.setRenderingHint(
            RenderingHints.KEY_RENDERING,
            RenderingHints.VALUE_RENDER_QUALITY);
        g2d.setRenderingHint(
            RenderingHints.KEY_FRACTIONALMETRICS,
            RenderingHints.VALUE_FRACTIONALMETRICS_ON);
        // set the text color and font
        g2d.setColor(new Color(255, 102, 102));
        g2d.setFont(new Font("Lato", Font.BOLD, 18));
        // draw the score in the bottom center of the screen
        // https://stackoverflow.com/a/27740330/4655368
        FontMetrics metrics = g2d.getFontMetrics(g2d.getFont());
        // the text will be contained within this rectangle.
        // here I've sized it to be the entire bottom row of board tiles
        Rectangle rect_1 = new Rectangle(128, 268+48, 192, 24);
        // determine the x coordinate for the text
        int x_1 = rect_1.x + (rect_1.width - metrics.stringWidth(text_1)) / 2;

        // determine the y coordinate for the text
        // (note we add the ascent, as in java 2d 0 is top of the screen)
        int y_1 = rect_1.y + ((rect_1.height - metrics.getHeight()) / 2) + metrics.getAscent();
        // draw the string
        g2d.drawString(text_1, x_1, y_1);
    }

    private void drawScore(Graphics g) 
    {
        // set the text to be displayed
        String text_1 = "1UP";
        String text_2 = Player.getScore();
        String text_3 = "HIGH SCORE";
        String text_4 = ""+Player.getHighScore();
        String text_5 = "LEVEL";
        String text_6 = ""+level;

        if (player.getScore().equals("0"))text_2 = "00";

        // we need to cast the Graphics to Graphics2D to draw nicer text
        Graphics2D g2d = (Graphics2D) g;
        g2d.setRenderingHint(
            RenderingHints.KEY_TEXT_ANTIALIASING,
            RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        g2d.setRenderingHint(
            RenderingHints.KEY_RENDERING,
            RenderingHints.VALUE_RENDER_QUALITY);
        g2d.setRenderingHint(
            RenderingHints.KEY_FRACTIONALMETRICS,
            RenderingHints.VALUE_FRACTIONALMETRICS_ON);
        // set the text color and font
        g2d.setColor(new Color(255, 255, 255));
        g2d.setFont(new Font("Lato", Font.BOLD, 18));
        // draw the score in the bottom center of the screen
        // https://stackoverflow.com/a/27740330/4655368
        FontMetrics metrics = g2d.getFontMetrics(g2d.getFont());
        // the text will be contained within this rectangle.
        // here I've sized it to be the entire bottom row of board tiles
        Rectangle rect_1 = new Rectangle(48, 4, 96, 24);
        Rectangle rect_2 = new Rectangle(64, 20, 96, 24);
        Rectangle rect_3 = new Rectangle(160, 4, 96, 24);
        Rectangle rect_4 = new Rectangle(208, 20, 96, 24);
        Rectangle rect_5 = new Rectangle(280, 4, 96, 24);
        Rectangle rect_6 = new Rectangle(296, 20, 96, 24);

        // draw the player/game stats
        g2d.drawString(text_1, 40, 16); // Draw the player up 
        g2d.drawString(text_2, 72, 32); // Draw score int
        g2d.drawString(text_3, 152, 16); // Draw high score
        g2d.drawString(text_4, 196, 32); // Draw High Score int
        g2d.drawString(text_5, 344, 16); // Draw level
        g2d.drawString(text_6, 368, 32); // Draw level int
    }

    private ArrayList<Coin> populateDots() 
    {
        ArrayList<Coin> coinList = new ArrayList<>();
        Random rand = new Random();

        // create the given number of coins in each row and column
        for (int k=0; k<ROWS-96; k += 16)
        {
          for (int j=16; j<COLUMNS; j += 16)
          {
            ArrayList<Coin> temp = new ArrayList<Coin>();
            ArrayList<Rectangle> coinBounds = new   ArrayList<Rectangle>();
            if((k%16==0 && k%16==0) && (j!=0 &&   k!=0) && ((k/16!=3) || (j/16!=1 && j/16!=26)) && ((k/16!=23) || (j/16!=1 && j/16!=26)))
            { // If the dot row and column is divisible by 16...
              if(!(j/16==13 || j/16==14 || j/16==6 || j/16==21))
              { // If the dot isn't in columns 13, 14, 6, or 21...
                if((!(k/16>=9 && k/16<=19)))
                { // If the dot is not in rows 9 through 19
                  coinList.add(new Coin("dot", j, k+48));
                }
              }
              else if (j/16==13 || j/16==14)
              { // If the dot is in columns 13 or 14...
                if(!(k/16==23) && !(k/16>=9 && k/16<=19))
                { // If the dot isn't in row 23 or between rows 9 and 19, place a dot.
                  coinList.add(new Coin("dot", j, k+48));
                }
              }
              else if (j/16==6 || j/16==21)
              { // If the dot is on columns 6 or 21, add it
                coinList.add(new Coin("dot", j, k+48));
              }
            }
            if (coinList.size()>1)
            { // Remove dots that border walls
              coinList = removeBadDots(coinList, player.getBarriers());
            }
          }
        }
        coinList.add(new Coin("pellet", 16, 48+48));
        coinList.add(new Coin("pellet", 416, 48+48));
        coinList.add(new Coin("pellet", 16, 368+48));
        coinList.add(new Coin("pellet", 416, 368+48));

        return coinList;
    }

    private ArrayList<Coin> removeBadDots(ArrayList<Coin> list, ArrayList<Rectangle> other)
    {
      for (int i=0; i<list.size(); i++)
      {
        for (int j=0; j<other.size(); j++)
        {
          if (list.get(i).getBounds().intersects(other.get(j)) || other.get(j).contains(list.get(i).getBounds()))
          {
            list.remove(i);
            if (list.isEmpty())return(list);
            if(i>0)i--;
          }
        }
      }
      return(list);
    }

    private void collectDots() 
    {
      // allow player to pickup coins
      ArrayList<Coin> collectedCoins = new ArrayList<>();
      // contain list of new coins
      ArrayList<Coin> newList = new ArrayList<>();
      for (Coin coin : coins) 
      {
        // if the player is on the same tile as a coin, collect it
        if (player.getBounds().intersects(coin.getBounds()) && player.getY()+8 == coin.getY() && coin.getType().equals("dot") && !(Ghost.killedPac))
        {
          // give the player some points for picking this up
          player.addScore(COINS_VALUE);
          collectedCoins.add(coin);
          current_coins = coins.size()-1;
        }
        else if (player.getBounds().intersects(coin.getBounds()) && player.getY()+8== coin.getY() && coin.getType().equals("pellet") && !(Ghost.killedPac))
        {
          // give the player some points for picking this up
          player.addScore(PELLET_VALUE);
          collectedCoins.add(coin);
          current_coins = coins.size()-1;
          Ghost.blueMode(true);
        }
      }
      // remove collected coins from the board
      coins.removeAll(collectedCoins);
    }

    private void collectTempDots() 
    {
      // allow player to pickup coins
      ArrayList<Coin> collectedTempCoins = new ArrayList<>();
      // contain list of new coins
      ArrayList<Coin> newList = new ArrayList<>();
      for (Coin coin : introCoins) 
      {
        // if the player is on the same tile as a coin, collect it
        if (pac.getBounds().intersects(coin.getBounds()) && pac.getY()+8 == coin.getY() && !(Ghost.killedPac))
        {
          collectedTempCoins.add(coin);
          if (coin.getType().equals("pellet"))
          {
            Ghost.blueMode(true);
            Player.addScore(50);
          }
          else
          {
            Player.addScore(10);
          }
        }
      }
      // remove collected coins from the board
      introCoins.removeAll(collectedTempCoins);
    }
}