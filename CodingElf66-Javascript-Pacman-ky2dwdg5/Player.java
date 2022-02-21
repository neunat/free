import java.awt.event.KeyEvent;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.awt.image.ImageObserver;
import java.awt.Point;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.Rectangle;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Random;
import javax.swing.*;
import java.io.File;


public class Player 
{
  // image that represents the player's position on the board
  private BufferedImage image;
  // current position of the player on the board grid
  private Point pos;
  // keep track of the player's score
  private static int score;
  // keep track of the player's score, but use it to track bonuses
  private static int bonusScore;
  // keep track of total score
  private static int highscore;
  // keep track of life count
  private int lives;
  // keep track of direction
  private int direction = 0;
  // keep track of wanted direction
  private int wantedDirection = 0;
  // keep track of whether or not the pacman is alive
  private boolean dead = false;
  // keep track of the animation turns
  private int turn = 0;
  // hold the right exit boundaries
  private final Rectangle rightRect = new Rectangle(432, 216+48, 4, 32);
  // hold the left exit boundaries
  private final Rectangle leftRect = new Rectangle(0, 216+48, 4, 32);

  private ArrayList<String> UpList = new ArrayList<String>();
  private ArrayList<String> RightList = new ArrayList<String>();
  private ArrayList<String> DownList = new ArrayList<String>();
  private ArrayList<String> LeftList = new ArrayList<String>();
  private ArrayList<String> DeathList = new ArrayList<String>();
  private ArrayList<Rectangle> barriers = new ArrayList<Rectangle>();

  public Player() 
  {
    // load the assets
    loadImage();
    loadImageList();
    loadBarriers();
    // initialize the state
    pos = new Point(0, 0+48);
    score = 0;
    lives = 3;
    highscore = 0;
    pos.setLocation(208, 360+48);
  }

  private void loadImage() 
  {
      try 
      {
        image = ImageIO.read(new File("images/Pac-Man/Pacman.png"));
      }
      catch (IOException exc)
      {
        System.out.println("Error opening image file: " + exc.getMessage());
      }
  }

  private void loadImageList()
  {
      // Add file location to up direction
      this.UpList = new ArrayList<String>();
      UpList.add("images/Pac-Man/Pacman-Up-1.png");
      UpList.add("images/Pac-Man/Pacman-Up-2.png");
      UpList.add("images/Pac-Man/Pacman-Up-3.png");
      // Add file location to right direction
      this.RightList = new ArrayList<String>();
      RightList.add("images/Pac-Man/Pacman-Right-1.png");
      RightList.add("images/Pac-Man/Pacman-Right-2.png");
      RightList.add("images/Pac-Man/Pacman-Right-3.png");
      // Add file location to down direction
      this.DownList = new ArrayList<String>();
      DownList.add("images/Pac-Man/Pacman-Down-1.png");
      DownList.add("images/Pac-Man/Pacman-Down-2.png");
      DownList.add("images/Pac-Man/Pacman-Down-3.png");
      // Add file location to left direction
      this.LeftList = new ArrayList<String>();
      LeftList.add("images/Pac-Man/Pacman-Left-1.png");
      LeftList.add("images/Pac-Man/Pacman-Left-2.png");
      LeftList.add("images/Pac-Man/Pacman-Left-3.png");
      // Add file location to death animation
      this.DeathList = new ArrayList<String>();
      DeathList.add("images/PacMan-Death/Pacman.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-1.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-2.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-3.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-4.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-5.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-6.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-7.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-8.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-9.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-10.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-11.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-12.png");
      DeathList.add("images/PacMan-Death/Pacman-Death-13.png");
  }

  public void loadBarriers()
  {
    /*
    Exits
    */
      barriers.add(new Rectangle(432, 216+48, 4, 32)); // Right exit
      barriers.add(new Rectangle(0, 216+48, 4, 32)); // Left Exit
    /*
    In-Game Corners
    */
      
      // Top Left Corners
      barriers.add(new Rectangle(40, 104+48, 48, 16)); // T/L Small Corner
      barriers.add(new Rectangle(40, 40+48, 48, 32)); // T/L Medium Corner
      barriers.add(new Rectangle(120, 40+48, 64, 32)); // T/L Large Corner
      
      // Top Right Corners
      barriers.add(new Rectangle(360, 104+48, 48, 16)); // T/R Small Corner
      barriers.add(new Rectangle(360, 40+48, 48, 32)); // T/R Medium Corner
      barriers.add(new Rectangle(264, 40+48, 64, 32)); // T/R Large Corner
      
      // Ghost Area
      barriers.add(new Rectangle(168, 200+48, 112, 64)); // Middle Ghost Home :)
    /*
    In-Game Aisles/Hallways
    */
      // Top Hallways
      barriers.add(new Rectangle(216, 8+48, 16, 64)); // T/M Tall Wall
      barriers.add(new Rectangle(120, 104+48, 16, 112)); // T/L Tall Wall
      barriers.add(new Rectangle(136, 152+48, 48, 16)); // T/L Flat Wall
      barriers.add(new Rectangle(168, 104+48, 112, 16)); // T/M Flat Wall
      barriers.add(new Rectangle(216, 120+48, 16, 48)); // T/M Short Wall
      barriers.add(new Rectangle(312, 104+48, 16, 112)); // T/R Tall Wall
      barriers.add(new Rectangle(264, 152+48, 48, 16)); // T/R Flat Wall
      barriers.add(new Rectangle(0, 152+48, 88, 64)); // T/L Flat Walls & Short Wall
      barriers.add(new Rectangle(360, 152+48, 88, 64)); // T/R Flat Walls & Short Wall
     
      // Bottom Hallways
      barriers.add(new Rectangle(120, 248+48, 16, 64)); // B/L Short Wall
      barriers.add(new Rectangle(312, 248+48, 16, 64)); // B/R Short Wall
      barriers.add(new Rectangle(168, 296+48, 112, 16)); // B/M Flat Wall
      barriers.add(new Rectangle(216, 312+48, 16, 48)); // B/M Short Wall
      barriers.add(new Rectangle(120, 344+48, 64, 16)); // B/L Flat Wall
      barriers.add(new Rectangle(264, 344+48, 64, 16)); // B/R Flat Wall
      barriers.add(new Rectangle(72, 344+48, 16, 64)); // B/L Small/Corner Tall Wall
      barriers.add(new Rectangle(40, 344+48, 32, 16)); // B/L Small/Corner Flat Wall
      barriers.add(new Rectangle(360, 344+48, 16, 64)); // B/R Small/Corner Tall Wall
      barriers.add(new Rectangle(376, 344+48, 32, 16)); // B/R Small/Corner Flat Wall 
      barriers.add(new Rectangle(40, 440+48, 144, 16)); // B/L Large/Corner Flat Wall
      barriers.add(new Rectangle(120, 392+48, 16, 64)); // B/L Large/Corner Short Wall
      barriers.add(new Rectangle(8, 392+48, 32, 16)); // B/L Middle Flat
      barriers.add(new Rectangle(168, 392+48, 112, 16)); // B/M Flat Wall 2
      barriers.add(new Rectangle(216, 408+48, 16, 48)); // B/M Short Wall 2
      barriers.add(new Rectangle(264, 440+48, 144, 16)); // B/R Large/Corner Flat Wall
      barriers.add(new Rectangle(312, 392+48, 16, 48)); // B/R Large/Corner Short Wall
      barriers.add(new Rectangle(408, 392+48, 32, 16)); // B/R Middle Flat
      barriers.add(new Rectangle(0, 248+48, 88, 64)); // B/L Flat Walls & Short wall
      barriers.add(new Rectangle(360, 248+48, 88, 64)); // B/R Flat Walls & Short Wall
     
      // Side Borders
      barriers.add(new Rectangle(0, 0+48, 448, 8)); // Top
      barriers.add(new Rectangle(0, 8+48, 8, 184)); // Left-1
      barriers.add(new Rectangle(0, 248+48, 8, 232)); // Left-2
      barriers.add(new Rectangle(0, 488+48, 448, 8)); // Bottom
      barriers.add(new Rectangle(440, 8+48, 8, 184)); // Right-1
      barriers.add(new Rectangle(440, 248+48, 8, 232)); // Right-2
  }

  public ArrayList<Rectangle> getBarriers()
  {
    return(barriers);
  }

  public void updateImage()
    {
      try
      {
        switch(direction)
        {
          case(0):
            if(this.dead==false)image = ImageIO.read(new File ("images/Pac-Man/Pacman.png"));
            break;
          case(1):
            image = ImageIO.read(new File (UpList.get(turn%3)));
            break;
          case(2):
            image = ImageIO.read(new File(RightList.get(turn%3)));
            break;
          case(3):
            image = ImageIO.read(new File (DownList.get(turn%3)));
            break;
          case(4):
            image = ImageIO.read(new File (LeftList.get(turn%3)));
            break;
        }
      }
      catch (IOException exc)
      {
        System.out.println("Error opening image file." + exc.getMessage());
      }
      if (turn%3==0)turn = 0; 
      turn += 1;
    }

  public void invisible()
  {
    try
    {
      this.image = ImageIO.read(new File("images/Invisible.png"));
    }
    catch (IOException exc)
    {
      System.out.println("Unable to open file: "+exc);
    }
  }

  public void translate(int x, int y)
    {
      pos.translate(x, y);
    }
    
  // Fixes collision (used in fixCollision() method)
  public void collision()
    {
      switch(this.direction)
      {
        case(1): // Up
          pos.translate(0, 16);
          break;
        case(2): // Right
          pos.translate(-16, 0);
          break;
        case(3): // Down
          pos.translate(0, -16);
          break;
        case(4): // Left
          pos.translate(16, 0);
          break;
      }
    }

  // Fixes player collision if colliding
  public void fixCollision()
  {
    Rectangle playerRect = new Rectangle(this.getX(), this.getY(), 32, 32);
    for (int i=0; i<this.getBarriers().size(); i++)
    {
      if (playerRect.intersects(this.getBarriers().get(i)))
      {
        this.collision();
        if (this.getBarriers().get(i).equals(this.rightRect))
        {
          this.enterLeft();
        }
        else if (this.getBarriers().get(i).equals(this.leftRect))
        {
          this.enterRight();
        }
      }
    }
  }

  // Check for future collision in 'x' direction
  public boolean checkCollision(int dir)
  {
    int x1=-200; int y1= -200;
    boolean hitSomething = false;
    
    if(dir==1)
    {
      x1 = this.getBounds().x;
      y1 = this.getBounds().y-4;
    }
    else if(dir==2)
    {
      x1 = this.getBounds().x+4;
      y1 = this.getBounds().y;
    }
    else if(dir==3)
    {
      x1 = this.getBounds().x;
      y1 = this.getBounds().y+4;
    }
    else if(dir==4)
    {
      x1 = this.getBounds().x-4;
      y1 = this.getBounds().y;
    }
    else
    {
      return(true);
    }
    Rectangle playerRect = new Rectangle(x1, y1, 32, 32);
    for (int i=0; i<this.getBarriers().size(); i++)
    {
      if (playerRect.intersects(this.getBarriers().get(i)))
      {
        hitSomething = true;
        if (this.getBarriers().get(i).equals(this.getBarriers().get(0)))
        {
          this.enterLeft();
        }
        else if (this.getBarriers().get(i).equals(this.getBarriers().get(1)))
        {
          this.enterRight();
        }
      }
    }
    return(hitSomething);
  }

  public void draw(Graphics g, ImageObserver observer) {
      // with the Point class, note that pos.getX() returns a double, but 
      // pos.x reliably returns an int.  https://stackoverflow.com/a/30220114/4655368
      // this is also where we translate board grid position into a canvas pixel position by multiplying by the tile size.
      g.drawImage(
        image, 
        pos.x * Board.TILE_SIZE, 
        pos.y * Board.TILE_SIZE, 
        observer
      );
    }

    // Go to the right entrance
  public void enterLeft()
    {
      pos.setLocation(8, pos.getY());
      direction = 2;
    }
    // Go to the left entrance
  public void enterRight()
    {
      pos.setLocation(392, pos.getY());
      direction = 4;
    }
    
  public void keyPressed(KeyEvent e) 
    {
      // every keyboard get has a certain code. get the value of thacode from the
      // keyboard event so that we can compare it to KeyEvent constants
      int key = e.getKeyCode();
      
      // depending on which arrow key was pressed, we're going to movthe player by
      // one whole tile for this input
      switch(key)
      {
        case(KeyEvent.VK_UP):
          if(!(this.checkCollision(1)))
          {
            direction = 1;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 1;
          }
          break;
        case(KeyEvent.VK_W):
          if(!(this.checkCollision(1)))
          {
            direction = 1;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 1;
          }
          break;

        case(KeyEvent.VK_RIGHT):
          if (pos.getX()%16==0)
          {
            pos.translate(8, 0);
          }
          if(!(this.checkCollision(2)))
          {
            direction = 2;
            wantedDirection = 0;
          }
          break;
        case(KeyEvent.VK_D):
          if (pos.getX()%16==0)
          {
            pos.translate(8, 0);
            pos.translate(16, 0);
          }
          if(!(this.checkCollision(2)))
          {
            direction = 2;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 2;
          }
          break;

        case(KeyEvent.VK_DOWN):
          if(!(this.checkCollision(3)))
          {
            direction = 3;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 3;
          }
          break;
        case(KeyEvent.VK_S):
          if(!(this.checkCollision(3)))
          {
            direction = 3;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 3;
          }
          break;

        case(KeyEvent.VK_LEFT):
          if (pos.getX()%16==0)
          {
            pos.translate(-8, 0);
          }
          if(!(this.checkCollision(4)))
          {
            direction = 4;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 4;
          }
          break;
        case(KeyEvent.VK_A):
          if (pos.getX()%16==0)
          {
            pos.translate(-8, 0);
            pos.translate(-16, 0);
          }
          if(!(this.checkCollision(4)))
          {
            direction = 4;
            wantedDirection = 0;
          }
          else
          {
            wantedDirection = 4;
          }
          break;
      }
    }
    

  public void tick()
    {
      // this gets called once every tick, beforthe repainting process happens.
      // so we can do anything needed in here tupdate the state of the player
    
      // prevent the player from moving off the edge of the board sideways
      if (pos.x < 0)
      {
        pos.x = 0;
      }
      else if (pos.x >= Board.COLUMNS)
      {
        pos.x = Board.COLUMNS - 1;
      }
      // prevent the player from moving off the edge of the board vertically
      if (pos.y < 48)
      {
        pos.y = 48;
      }
      else if (pos.y >= Board.ROWS-48) 
      {
        pos.y = Board.ROWS - 48;
      }
      
      // If the player has a score of 10,000 they get a life
      if (this.bonusScore >= 10000)
      {
        this.lives += 1;
        this.bonusScore -= 10000;
      }
    }

  public int getDirection()
    {
      return(direction);
    }

  public void setDirection(int direction)
    {
      this.direction = direction;
    }

  public int getWantedDirection()
    {
      return(wantedDirection);
    }

  public void setWantedDirection(int wantedDirection)
    {
      this.wantedDirection = wantedDirection;
    }

  public Point getPos() 
    {
      return pos;
    }

  public int getX()
  {
    return(pos.x);
  }

  public static String getScore() 
  {
    return(String.valueOf(Player.score));
  }

  public static int getScoreInt()
  {
    return(Player.score);
  }

  public static void resetScores()
  {
    Player.score = 0;
    Player.bonusScore = 0;
  }

  public static void updateHighScore(int scoreboardHighest)
  {
    if (Player.score<scoreboardHighest)
    {
      Player.highscore = scoreboardHighest;
    }
    else
    {
      Player.highscore = score;
    } 
  }

  public static int getHighScore()
  {
    return(Player.highscore);
  }
  
  public static void addHighScore(int score)
  {
    Player.highscore += score;
  }

  public static void addScore(int amount) 
  {
    Player.score += amount;
    Player.bonusScore += amount;
  }

  public void updateDeath()
  {
    try
    {
      if (!(DeathList.isEmpty()))
      {
        image = ImageIO.read(new File (DeathList.get(0)));
        DeathList.remove(0);
      }
    }
    catch (IOException exc)
    {
      System.out.println("Failed to load file: " + exc);
    }
  }

  public boolean getDeathAnimation()
  {
    return(DeathList.isEmpty());
  }

  public int getY()
    {
      return(pos.y);
    }

  public void goForward(int dir)
    {
      switch(dir)
      {
        case(1): // Up
          pos.translate(0, -16);
          break;
        case(2): // Right
          pos.translate(16, 0);
          break;
        case(3): // Down
          pos.translate(0, 16);
          break;
        case(4): // Left
          pos.translate(-16, 0);
          break;
      }
      this.direction = dir;
    }

  public void restart()
  {
    if (lives-1>0)
    {
      // load the assets
      loadImage();
      loadImageList();
      loadBarriers();
      // initialize the state
      pos = new Point(0, 0+48);
      lives -= 1;
      pos.setLocation(208, 360+48);
      this.direction = 0;
      this.wantedDirection = 0;
    }
    else
    {
      // load the assets
      loadImage();
      loadImageList();
      loadBarriers();
      // initialize the state
      pos = new Point(0, 0+48);
      score = 0;
      bonusScore = 0;
      highscore = 0;
      lives = 3;
      pos.setLocation(208, 360+48);
      this.direction = 0;
      this.wantedDirection = 0;
    }
  }

  public void levelUp()
  {
    if (lives>0)
    {
      // load the assets
      loadImage();
      loadImageList();
      loadBarriers();
      // initialize the state
      pos = new Point(0, 0+48);
      pos.setLocation(208, 360+48);
      this.direction = 0;
      this.wantedDirection = 0;
    }
  }

  public void setPosition(int x, int y)
  {
    this.pos.setLocation(x, y);
  }

  public int getLives()
  {
    return(this.lives);
  }

  public Rectangle getBounds() 
  {
    return new Rectangle((int)pos.getX(), (int)pos.getY(), 16, 16);
  }

}
