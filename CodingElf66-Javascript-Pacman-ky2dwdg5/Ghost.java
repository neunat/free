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

// Ghost Patterns work
public class Ghost 
{
  // image that represents the player's position on the board
  private BufferedImage image;
  // current position of the player on the board grid
  private Point pos;
  // keep track of the player's score
  private int score;
  // keep track of direction
  private int direction = 0;
  // keep track of player direction
  private int pacDirection;
  // keep track of player position
  private Point pacPosition;
  private Point pacOldPosition;
  // keep track of the number of eaten ghosts in each blue mode
  private static int ghostsEaten;
  // keep the ghost moving until a collision
  private boolean keepGoing;
  // keep track of whether or not the ghost is in the box
  private boolean isInBox, displayPoints, isEaten, beNormal;
  // control the value of having killed pac-man
  public static boolean killedPac = false;
  // control the way the ghosts act in the game
  public static boolean blueMode = false;
  public static boolean normalMode = true;
  // keep track of the elapsed blueMode time through the program
  private static double startBlueMode;
  private static double currentBlueMode;
  // keep track of the animation turns
  private int turn = 0;
  // keep track of the blue mode animation turns
  private int blueTurn = 0;
  // hold the ghost name (helps with files)
  private String ghost;
  // hold the random method
  private Random rand = new Random();
  // hold the right exit boundaries
  public static final Rectangle rightRect = new Rectangle(432, 216+48, 4, 32);
  // hold the left exit boundaries
  public static final Rectangle leftRect = new Rectangle(0, 216+48, 4, 32);

  // Lists hold the image animations
  private ArrayList<String> UpList = new ArrayList<String>();
  private ArrayList<String> RightList = new ArrayList<String>();
  private ArrayList<String> DownList = new ArrayList<String>();
  private ArrayList<String> LeftList = new ArrayList<String>();
  private ArrayList<String> BlueList = new ArrayList<String>();
  private ArrayList<String> EatenList = new ArrayList<String>();
  private ArrayList<String> StationaryList = new ArrayList<String>();

  // Lists hold the walls and intersections
  private ArrayList<Rectangle> barriers = new ArrayList<Rectangle>();
  private ArrayList<Point> intersections = new ArrayList<Point>();
  private ArrayList<Rectangle> ghostBounds = new ArrayList<Rectangle>();

  public Ghost(String ghost) 
  {
    // set the ghost
    this.ghost = ghost;
    // load the assets
    loadImage();
    loadImageList();
    loadBarriers();
    loadIntersections();
    this.isEaten = false;
    this.displayPoints = false;
    this.isInBox = true;
    // initialize the state
    pos = new Point(0, 0);
    pacPosition = new Point(208, 360+48);
    pacDirection = 0;
    score = 0;
    Ghost.ghostsEaten = 0;
    if (ghost.equals("Blinky"))pos.setLocation(208, 168+48);
    else if (ghost.equals("Pinky"))pos.setLocation(208, 216+48);
    else if (ghost.equals("Inky"))pos.setLocation(176, 216+48);
    else if (ghost.equals("Clyde"))pos.setLocation(240, 216+48);
  }

  // load the initial image of the ghost
  private void loadImage() 
  {
    try 
    {
      image = ImageIO.read(new File("images/"+this.ghost+"/"+this.ghost+"-Left-2.png"));
    }
    catch (IOException exc)
    {
      System.out.println("Error opening image file: " + exc.getMessage());
    }
  }

  // create the list of images per ghost
  private void loadImageList()
  {
    // Reset the file location lists
    UpList = new ArrayList<String>();
    RightList = new ArrayList<String>();
    DownList = new ArrayList<String>();
    LeftList = new ArrayList<String>();
    BlueList = new ArrayList<String>();
    EatenList = new ArrayList<String>();
    StationaryList = new ArrayList<String>();

    // Add file location to up direction
    UpList.add("images/"+this.ghost+"/"+this.ghost+"-Up-2.png");
    UpList.add("images/"+this.ghost+"/"+this.ghost+"-Up-1.png");
    // Add file location to right direction
    RightList.add("images/"+this.ghost+"/"+this.ghost+"-Right-2.png");
    RightList.add("images/"+this.ghost+"/"+this.ghost+"-Right-1.png");
    // Add file location to down direction
    DownList.add("images/"+this.ghost+"/"+this.ghost+"-Down-2.png");
    DownList.add("images/"+this.ghost+"/"+this.ghost+"-Down-1.png");
    // Add file location to left direction
    LeftList.add("images/"+this.ghost+"/"+this.ghost+"-Left-2.png");
    LeftList.add("images/"+this.ghost+"/"+this.ghost+"-Left-1.png");
    // Add file location to blue mode animation
    BlueList.add("images/Ghost-Death/Dead-Blue-2.png");
    BlueList.add("images/Ghost-Death/Dead-Blue-1.png");
    // Add file location to eaten mode animation
    EatenList.add("images/Ghost-Death/Eyes-Up.png");
    EatenList.add("images/Ghost-Death/Eyes-Right.png");
    EatenList.add("images/Ghost-Death/Eyes-Down.png");
    EatenList.add("images/Ghost-Death/Eyes-Left.png");
    // Add file location to stationary mode animation
    StationaryList.add("images/"+this.ghost+"/"+this.ghost+"-Left-2.png");
    StationaryList.add("images/"+this.ghost+"/"+this.ghost+"-Left-1.png");
  }

  // create the walls the ghosts can't go through
  public void loadBarriers()
  {
    // Reset barrier list
    barriers = new ArrayList<Rectangle>();

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
      //barriers.add(new Rectangle(168, 200, 112, 64)); // Middle Ghost Home :)
      barriers.add(new Rectangle(168, 200+48, 40, 8)); // Ghost T/L Wall
      barriers.add(new Rectangle(240, 200+48, 40, 8)); // Ghost T/R Wall
      //barriers.add(new Rectangle(208, 200, 32, 8)); // Ghost Exit
      barriers.add(new Rectangle(168, 208+48, 8, 48)); // Ghost Left Wall
      barriers.add(new Rectangle(272, 208+48, 8, 48)); // Ghost Right Wall
      barriers.add(new Rectangle(168, 256+48, 112, 8)); // Ghost Bottom Wall
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

  public void loadIntersections()
  {
    // Reset Intersections list
    intersections = new ArrayList<Point>();

    // All intersections
    intersections.add(new Point(8, 8+48));
    intersections.add(new Point(88, 8+48));
    intersections.add(new Point(184, 8+48));
    intersections.add(new Point(232, 8+48));
    intersections.add(new Point(328, 8+48));
    intersections.add(new Point(408, 8+48));
    intersections.add(new Point(8, 72+48));
    intersections.add(new Point(88, 72+48));
    intersections.add(new Point(136, 72+48));
    intersections.add(new Point(184, 72+48));
    intersections.add(new Point(232, 72+48));
    intersections.add(new Point(280, 72+48));
    intersections.add(new Point(328, 72+48));
    intersections.add(new Point(408, 72+48));
    intersections.add(new Point(8, 120+48));
    intersections.add(new Point(88, 120+48));
    intersections.add(new Point(136, 120+48));
    intersections.add(new Point(184, 120+48));
    intersections.add(new Point(232, 120+48));
    intersections.add(new Point(280, 120+48));
    intersections.add(new Point(328, 120+48));
    intersections.add(new Point(408, 120+48));
    intersections.add(new Point(136, 168+48));
    intersections.add(new Point(184, 168+48));
    intersections.add(new Point(232, 168+48));
    intersections.add(new Point(280, 168+48));
    intersections.add(new Point(88, 216+48));
    intersections.add(new Point(136, 216+48));
    intersections.add(new Point(280, 216+48));
    intersections.add(new Point(328, 216+48));
    intersections.add(new Point(136, 264+48));
    intersections.add(new Point(280, 264+48));
    intersections.add(new Point(8, 312+48));
    intersections.add(new Point(88, 312+48));
    intersections.add(new Point(136, 312+48));
    intersections.add(new Point(184, 312+48));
    intersections.add(new Point(232, 312+48));
    intersections.add(new Point(280, 312+48));
    intersections.add(new Point(328, 312+48));
    intersections.add(new Point(408, 312+48));
    intersections.add(new Point(8, 360+48));
    intersections.add(new Point(40, 360+48));
    intersections.add(new Point(88, 360+48));
    intersections.add(new Point(136, 360+48));
    intersections.add(new Point(184, 360+48));
    intersections.add(new Point(232, 360+48));
    intersections.add(new Point(280, 360+48));
    intersections.add(new Point(328, 360+48));
    intersections.add(new Point(376, 360+48));
    intersections.add(new Point(408, 360+48));
    intersections.add(new Point(8, 408+48));
    intersections.add(new Point(40, 408+48));
    intersections.add(new Point(88, 408+48));
    intersections.add(new Point(136, 408+48));
    intersections.add(new Point(184, 408+48));
    intersections.add(new Point(232, 408+48));
    intersections.add(new Point(280, 408+48));
    intersections.add(new Point(328, 408+48));
    intersections.add(new Point(376, 408+48));
    intersections.add(new Point(408, 408+48));
    intersections.add(new Point(8, 456+48));
    intersections.add(new Point(184, 456+48));
    intersections.add(new Point(232, 456+48));
    intersections.add(new Point(408, 456+48));
  }

  public void addBarrier(Rectangle bounds)
  {
    this.barriers.add(bounds);
  }

  // update the ghost's animation
  public void updateImage()
  {
    try
    {
      switch(this.direction)
      {
        case(0):
          if(Ghost.normalMode || this.isInBox || this.beNormal)this.image = ImageIO.read(new File (StationaryList.get(turn%2)));
          else if (Ghost.blueMode && !(this.isEaten) && !(this.isInBox))this.image = ImageIO.read(new File(BlueList.get(turn%2)));
          break;
        case(1):
          if(Ghost.normalMode || this.isInBox || this.beNormal)this.image = ImageIO.read(new File (UpList.get(turn%2)));
          else if (Ghost.blueMode && !(this.isEaten) && !(this.isInBox))this.image = ImageIO.read(new File(BlueList.get(turn%2)));
          break;
        case(2):
          if(Ghost.normalMode || this.isInBox || this.beNormal)this.image = ImageIO.read(new File(RightList.get(turn%2)));
          else if (Ghost.blueMode && !(this.isEaten) && !(this.isInBox))this.image = ImageIO.read(new File(BlueList.get(turn%2)));
          break;
        case(3):
          if(Ghost.normalMode || this.isInBox || this.beNormal)this.image = ImageIO.read(new File (DownList.get(turn%2)));
          else if (Ghost.blueMode && !(this.isEaten) && !(this.isInBox))this.image = ImageIO.read(new File(BlueList.get(turn%2)));
          break;
        case(4):
          if(Ghost.normalMode || this.isInBox || this.beNormal)this.image = ImageIO.read(new File (LeftList.get(turn%2)));
          else if (Ghost.blueMode && !(this.isEaten) && !(this.isInBox))this.image = ImageIO.read(new File(BlueList.get(turn%2)));
          break;
      }
      if (this.isEaten && this.direction!=0)this.image = ImageIO.read(new File (EatenList.get(direction-1)));
      else if (this.displayPoints)
      {
        Ghost.ghostsEaten += 1;
        switch (Ghost.ghostsEaten)
        {
          case(1):
            this.image = ImageIO.read(new File ("images/Scores/200.png"));
            Player.addScore(200);
            break;
          case(2):
            this.image = ImageIO.read(new File ("images/Scores/400.png"));
            Player.addScore(400);
            break;
          case(3):
            this.image = ImageIO.read(new File ("images/Scores/800.png"));
            Player.addScore(800);
            break;
          case(4):
            this.image = ImageIO.read(new File ("images/Scores/1600.png"));
            Player.addScore(1600);
            break;
        }
        this.isEaten = true;
        this.displayPoints = false;
        /*
        try
        {
          Thread.sleep(1000);
        }
        catch(InterruptedException exc) 
        {
          System.out.print("Interruption! "+exc);
        }
        */
      }
    }
    catch (IOException exc)
    {
      System.out.println("Error opening image file." + exc.getMessage());
    }
    if (turn%2 == 0)turn = 0;
    this.turn += 1;
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
  // Fixes ghost collision if colliding
  public void fixCollision()
  {
    Rectangle ghostRect = this.getBounds();
    for (int i=0; i<this.getBarriers().size(); i++)
    {
      if (ghostRect.intersects(this.getBarriers().get(i)) && !(this.isInBox))
      {
        this.collision();
        if (this.getBarriers().get(i).equals(this.rightRect))
        {
          this.enterLeft();
        }
        else if (this.getBarriers().get(i).equals(this.leftRect) && !(this.isInBox))
        {
          this.enterRight();
        }
      }
    }
    for (int j=0; j<this.ghostBounds.size(); j++)
    {
      if (ghostRect.intersects(this.ghostBounds.get(j)) && !(this.isInBox))
      {
        this.collision();
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
      y1 = this.getBounds().y-2;
    }
    else if(dir==2)
    {
      x1 = this.getBounds().x+2;
      y1 = this.getBounds().y;
    }
    else if(dir==3)
    {
      x1 = this.getBounds().x;
      y1 = this.getBounds().y+2;
    }
    else if(dir==4)
    {
      x1 = this.getBounds().x-2;
      y1 = this.getBounds().y;
    }
    else
    {
      return(true);
    }
    Rectangle ghostRect = new Rectangle(x1, y1, 32, 32);
    for (int i=0; i<this.getBarriers().size(); i++)
    {
      if (ghostRect.intersects(this.getBarriers().get(i)))
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
        this.keepGoing = false;
      }
    }
    for (int j=0; j<this.ghostBounds.size(); j++)
    {
      if (ghostRect.intersects(this.ghostBounds.get(j)))
      {
        hitSomething = true;
      }
    }
    return(hitSomething);
  }

  public void addGhostInfo(Rectangle bounds)
  {
    ghostBounds.add(bounds);
    if (ghostBounds.size()>3)
    {
      ghostBounds.remove(0);
    }
  }

  // Draw the ghost
  public void draw(Graphics g, ImageObserver observer) 
  {
    // with the Point class, note that pos.getX() returns a double, but 
    // pos.x reliably returns an int.  https://stackoverflow.com/a/30220114/4655368
    // this is also where we translate board grid position into a canvas pixel position by multiplying by the tile size.
    g.drawImage(image, pos.x * Board.TILE_SIZE, pos.y * Board.TILE_SIZE, observer);
  }

  // Go to the left entrance
  public void enterLeft()
  {
    pos.setLocation(8, pos.getY());
    direction = 2;
  }
  // Go to the right entrance
  public void enterRight()
  {
    pos.setLocation(392, pos.getY());
    direction = 4;
  }
  
  // update the direction Pac-Man is going
  public void setPacDirection(int pacDirection)
  {
    if (pacDirection>=0 && pacDirection<=4)
    {
      this.pacDirection = pacDirection;
    }
    else
    {
      this.pacDirection = this.pacDirection;
    }
  }

  // update the position Pac-Man is at
  public void setPacPosition(Point pacPosition)
  {
    this.pacPosition = pacPosition;
  }

  public void setPacOldPosition(Point pacOldPosition)
  {
    this.pacOldPosition = pacOldPosition;
  }

  public boolean checkIntersection()
  {
    for (int i=0; i<intersections.size(); i++)
    {
      if (this.pos.equals(intersections.get(i)))
      {
        return(true);
      }
    }
    return(false);
  }

  public void respondToPacman(Point pnt)
  {
    int xDist, yDist, xRelDirection, yRelDirection, targetX, targetY, topSide, bottomSide, leftSide, rightSide, option;
    boolean error, skip, flee;
    Point targetTile = new Point(0,0);
    error = false;
    skip = false;
    xDist = Math.abs(pos.x-pacPosition.x);
    yDist = Math.abs(pos.y-pacPosition.y);
    xRelDirection = pos.x-pacPosition.x; // x1-x2 = L/R
    yRelDirection = pos.y-pacPosition.y; // y1-y2 = U/D
    targetX = pacPosition.x;
    targetY = pacPosition.y;

    if (this.isInBox)
    {
      return;
    }

    if (this.keepGoing)this.keepGoing=!(checkIntersection());

    Ghost.currentBlueMode = (System.currentTimeMillis()-Ghost.startBlueMode)/(double)1000; // Elapsed BlueMode time
    if (Ghost.currentBlueMode>10)
    {
      Ghost.blueMode(false); // Turn off blue mode
      this.beNormal = false; // Turn off ignore powerpellets
    }

    if(Ghost.killedPac)
    {
      this.direction = 0;
      return;
    }

    // 2 Known Errors
    if (this.ghost.equals("Blinky") && !(Ghost.blueMode) && (this.isEaten==false)) // Good Enough 4 Now
    {
      if (xDist>yDist && this.keepGoing==false) // If pac-man is further on the x-axis than the y-axis from the ghost
      {
        if (xRelDirection>0) // Pac-Man to the Left
        {
          if(!(this.checkCollision(4)) && !(this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)) // if can go left
          {
            if(Ghost.normalMode)this.direction = 4; // left direction
            if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2; // right direction
            this.keepGoing = true;
          }
          else if (this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48) // if by right exit
          {
            if (Ghost.normalMode)
            {
              this.direction = 2;
              this.keepGoing = true;
            }
          }
          else 
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() &&!(this.checkCollision(2)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(checkCollision(4)))this.direction = 4;
            }
            this.keepGoing = true;
          } 
        }
        else if (xRelDirection<0) // Pac-Man to the right
        {
          if(!(this.checkCollision(2)) && !(this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)) // if can go right
          {
            if(Ghost.normalMode)this.direction = 2; // right direction
            if(Ghost.blueMode && !(checkCollision(4)))this.direction = 4; // left direction
            
          }
          else if (this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48) // If by left exit
          {
            if(Ghost.normalMode)
            {
              this.direction = 4;
              this.keepGoing = true;
            }
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            { // Find a way to keep going until collision
              
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(checkCollision(2)))this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
      }
      else if (yDist>xDist && this.keepGoing==false) // if Pac-Man further U/D than L/R
      {
        if (yRelDirection>0) // Pac-Man is up
        {
          if(!(this.checkCollision(1))) // if can go up
          {
            if(Ghost.normalMode)this.direction = 1; // up direction
            if(Ghost.blueMode && !(checkCollision(3)))this.direction = 3; // down direction
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
              
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            {
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            this.keepGoing = true;
          }
        }
        else if (yRelDirection<0) // Pac-Man is down
        {
          if(!(this.checkCollision(3))) // if can go down
          { 
            if(Ghost.normalMode)this.direction = 3; // down direction
            if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            {
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            this.keepGoing = true;
          }
        }
      }
    }
    
    // 2 Known Error
    else if (this.ghost.equals("Pinky") && !(Ghost.blueMode) && (this.isEaten==false)) // Good Enough 4 Now
    {
      if (this.pacDirection==1)
      {
        targetX -= 64; // Four tiles above
        targetY -= 64; // Four tiles to left
      }
      else if (this.pacDirection==2)
      {
        targetX += 32; // Two tiles to the right
      }
      else if (this.pacDirection==3)
      {
        targetY += 32; // Two tiles below
      }
      else if (this.pacDirection==4)
      {
        targetX -= 32; // Two tiles to the left
      }

      xDist = Math.abs(pos.x-targetX); // Update xDist
      yDist = Math.abs(pos.y-targetY); // Update yDist
      xRelDirection = pos.x-targetX; // Update L/R
      yRelDirection = pos.y-targetY; // Update U/D

      if ((this.pacDirection==1 && this.direction==3) && (this.pacPosition.x==this.pos.x))
      {
        this.direction = 1;
        skip = true;
      }
      else if ((this.pacDirection==3 && this.direction==1) && (this.pacPosition.x==this.pos.x))
      {
        this.direction = 3;
        skip = true;
      }
      else if ((this.pacDirection==2 && this.direction==4) && (this.pacPosition.y==this.pos.y))
      {
        this.direction = 2;
        skip = true;
      }
      else if ((this.pacDirection==4 && this.direction==2) && (this.pacPosition.y==this.pos.y))
      {
        this.direction = 4;
        skip = true;
      }

      if(xDist>yDist && keepGoing==false && skip==false) // If target is further L/R than U/D
      {
        if (xRelDirection>0) // If target to left
        {
          if(!(this.checkCollision(4)) && !(this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)) // if can go left
          {
            if(Ghost.normalMode)this.direction = 4; // left direction
            if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2; // right direction
            
          }
          else if (this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)
          {
            if(Ghost.normalMode)
            {
              this.direction = 2;
              this.keepGoing = true;
            }
          }
          else 
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() &&!(this.checkCollision(4)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
        else if (xRelDirection<0) // If target to right
        {
          if(!(this.checkCollision(2)) && !(this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)) // if can go right
          {
            if(Ghost.normalMode)this.direction = 2; // right direction
            if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4; // left direction
            
          }
          else if (this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)
          {
            if(Ghost.normalMode)
            {
              this.direction = 4;
              this.keepGoing = true;
            }
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
      }
      else if (yDist>xDist && keepGoing==false && skip==false)// If target further U/D than L/R
      {
        if (yRelDirection>0) // If target is up
        {
          if(!(this.checkCollision(1))) // If can go up
          {
            if(Ghost.normalMode)this.direction = 1; // up direction
            if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3; // down direction
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            {
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            this.keepGoing = true;
          }
        }
        else if (yRelDirection<0) // If target is down
        {
          if(!(this.checkCollision(3))) // If can go down
          { 
            if(Ghost.normalMode)this.direction = 3; // down direction
            if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1; // up direction
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            {
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            this.keepGoing = true;
          }
        }
      }
    }
    
    // Good enough // 1 Known Error
    else if (this.ghost.equals("Inky") && !(Ghost.blueMode) && (this.isEaten==false))
    {
      if (this.pacDirection==1)
      {
        targetX -= 32; // Two tiles above
        targetY -= 32; // Two tiles to left
      }
      else if (this.pacDirection==2)
      {
        targetX += 32; // Two tiles to the right
        targetX *= Math.sqrt(Math.pow(targetX-pnt.x, 2)+Math.pow(targetY-pnt.y, 2));
      }
      else if (this.pacDirection==3)
      {
        targetY += 32; // Two tiles below
        targetY *= Math.sqrt(Math.pow(targetX-pnt.x, 2)+Math.pow(targetY-pnt.y, 2));
      }
      else if (this.pacDirection==4)
      {
        targetX -= 32; // Two tiles to the left
        targetX *= Math.sqrt(Math.pow(targetX-pnt.x, 2)+Math.pow(targetY-pnt.y, 2));
      }

      xDist = Math.abs(pos.x-targetX); // Update xDist
      yDist = Math.abs(pos.y-targetY); // Update yDist
      xRelDirection = pos.x-targetX; // Update L/R
      yRelDirection = pos.y-targetY; // Update U/D

      if (xDist>yDist && this.keepGoing==false) // If pac-man is further on the x-axis than the y-axis from the ghost
      {
        if (xRelDirection>0) // Target to the Left
        {
          if(!(this.checkCollision(4)) && !(this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)) // If can go left
          {
            if(Ghost.normalMode)this.direction = 4; // left direction
            if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2; // right direction
            
          }
          else if (this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)
          {
            if (Ghost.normalMode)
            {
              this.direction = 2;
              this.keepGoing = true;
            }
          }
          else 
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision  
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() &&!(this.checkCollision(2)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            this.keepGoing = true;
          } 
        }
        else if (xRelDirection<0) // Target to the right
        {
          if(!(this.checkCollision(2)) && !(this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)) // If can go right
          {
            if(Ghost.normalMode)this.direction = 2; // right direction
            if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 4; // left direction
          }
          else if (this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)
          {
            if (Ghost.normalMode)
            {
              this.direction = 4;
              this.keepGoing = true;
            }
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
      }
      else if (yDist>xDist && this.keepGoing==false) // if Pac-Man further U/D than L/R
      {
        if (yRelDirection>0) // Target is up
        {
          if(!(this.checkCollision(1))) // If can go up
          {
            if(Ghost.normalMode)this.direction = 1; // up direction
            if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
              
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            {
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            this.keepGoing = true;
          }
        }
        else if (yRelDirection<0) // Target is down
        {
          if(!(this.checkCollision(3))) // if can go down
          {
            if(Ghost.normalMode)this.direction = 3; // down direction
            if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1; // up direction
            
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            {
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            this.keepGoing = true;
          }
        }
      }
    }

    else if (this.ghost.equals("Clyde") && !(Ghost.blueMode) && (this.isEaten==false))
    {
      topSide = pacPosition.y-128;
      bottomSide = pacPosition.y+128;
      leftSide = pacPosition.x-128;
      rightSide = pacPosition.x+128;
      if ((this.pos.x>=leftSide && this.pos.x<=rightSide) && (this.pos.y>=topSide && this.pos.y<=bottomSide) && !(Ghost.blueMode)) // If within 8 tiles of Pac-Man
      {
        xDist = Math.abs(this.pos.x-16);
        yDist = Math.abs(this.pos.y-456);
        xRelDirection = this.pos.x-16;
        yRelDirection = this.pos.y-456;
      }
      else// If not within 8 tiles of Pac-Man
      {
        xDist = Math.abs(this.pos.x-pacPosition.x);
        yDist = Math.abs(this.pos.y-pacPosition.y);
        xRelDirection = this.pos.x-pacPosition.x;
        yRelDirection = this.pos.y-pacPosition.y;
      }

      if (xDist>yDist && this.keepGoing==false) // If pac-man is further L/R than U/D
      {
        if (xRelDirection>0) // Pac-Man to the Left
        {
          if(!(this.checkCollision(4))) // if can go left
          {
            if(Ghost.normalMode)this.direction = 4; // left direction
            if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2; // right direction
          }
          else if (this.pos.x >= 328 && this.pos.y == 216+48 && xRelDirection>=48)
          {
            if (Ghost.normalMode)
            {
              this.direction = 2;
              this.keepGoing = true;
            }
          }
          else 
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() &&!(this.checkCollision(2)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            this.keepGoing = true;
          } 
        }
        else if (xRelDirection<0) // Pac-Man to the right
        {
          if(!(this.checkCollision(2))) // if can go right
          {
            if(Ghost.normalMode)this.direction = 2; // right direction
            if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4; // left direction
            
          }
          else if (this.pos.x <= 88 && this.pos.y == 216+48 && xRelDirection<=-48)
          {
            if (Ghost.normalMode)
            {
              this.direction = 4;
              this.keepGoing = true;
            }
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            { // Find a way to keep going until collision
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
      }
      else if (yDist>xDist && this.keepGoing==false) // if Pac-Man further U/D than L/R
      {
        if (yRelDirection>0) // Pac-Man is up
        {
          if(!(this.checkCollision(1))) // if can go up
          {
            if(Ghost.normalMode)this.direction = 1; // up direction
            if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3; // down direction
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
              
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            {
              if(Ghost.normalMode)this.direction = 3;
              if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1;
            }
            this.keepGoing = true;
          }
        }
        else if (yRelDirection<0) // Pac-Man is down
        {
          if(!(this.checkCollision(3))) // if can go down
          { 
            if(Ghost.normalMode)this.direction = 3; // down direction
            if(Ghost.blueMode && !(this.checkCollision(1)))this.direction = 1; // up direction
            
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              if(Ghost.normalMode)this.direction = 4;
              if(Ghost.blueMode && !(this.checkCollision(2)))this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              if(Ghost.normalMode)this.direction = 2;
              if(Ghost.blueMode && !(this.checkCollision(4)))this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            {
              if(Ghost.normalMode)this.direction = 1;
              if(Ghost.blueMode && !(this.checkCollision(3)))this.direction = 3;
            }
            this.keepGoing = true;
          }
        }
      }
    }

    else if (Ghost.blueMode && !(this.isEaten)) // works, all act as blinky though
    {
      if (xDist>yDist && this.keepGoing==false) // If pac-man is further on the x-axis than the y-axis from the ghost
      {
        if (xRelDirection>0) // Pac-Man to the Left
        {
          if(!(this.checkCollision(2))) // if can go left
          {
            this.direction = 2; // right direction
            this.keepGoing = false;
          }
          else 
          {
            if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              if(Ghost.blueMode && !(checkCollision(3)))this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              if(Ghost.blueMode && !(checkCollision(1)))this.direction = 1;
            }
            else if (this.checkIntersection() &&!(this.checkCollision(4)))
            { // Find a way to keep going until collision
              if(Ghost.blueMode && !(checkCollision(4)))this.direction = 4;
            }
            this.keepGoing = true;
          } 
        }
        else if (xRelDirection<0) // Pac-Man to the right
        {
          if(!(this.checkCollision(4))) // if can go right
          {
            this.direction = 4; // left direction
            this.keepGoing = false;
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(3)))
            { // Find a way to keep going until collision
              this.direction = 3;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            { // Find a way to keep going until collision
              this.direction = 1;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            { // Find a way to keep going until collision
              this.direction = 2;
            }
            this.keepGoing = true;
          }
        }
      }
      else if (yDist>xDist && this.keepGoing==false) // if Pac-Man further U/D than L/R
      {
        if (yRelDirection>0) // Pac-Man is up
        {
          if(!(this.checkCollision(3))) // if can go up
          {
            this.direction = 3; // down direction
            this.keepGoing = false;
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(1)))
            {
              this.direction = 1;
            }
            this.keepGoing = true;
          }
        }
        else if (yRelDirection<0) // Pac-Man is down
        {
          if(!(this.checkCollision(1))) // if can go down
          { 
            this.direction = 1;
            this.keepGoing = false;
          }
          else
          {
            if (this.checkIntersection() && !(this.checkCollision(2)))
            {
              this.direction = 2;
            }
            else if (this.checkIntersection() && !(this.checkCollision(4)))
            {
              this.direction = 4;
            }
            else if (this.checkIntersection() && !(this.checkCollision(3)))
            {
              this.direction = 3;
            }
            this.keepGoing = true;
          }
        }
      }
      return;
    }

    else if (this.isEaten)
    {
      this.respondToEaten(this.pos);
      return;
    }
  }

  public void respondToEaten(Point pnt)
  {
      int xDist, yDist, xRelDirection, yRelDirection;
      xDist = Math.abs(pos.x-pacPosition.x);
      yDist = Math.abs(pos.y-pacPosition.y);
      xRelDirection = pos.x-pacPosition.x; // x1-x2 = L/R
      yRelDirection = pos.y-pacPosition.y; // y1-y2 = U/D

      Rectangle ghostHome = new Rectangle(168, 200+48, 112, 64);
      this.barriers = new ArrayList<Rectangle>();
      if (this.ghost.equals("Blinky"))
      { // 208, 168+48
        xDist = Math.abs(this.pos.x-208);
        yDist = Math.abs(this.pos.y-(168+48));
        xRelDirection = this.pos.x-208;
        yRelDirection = this.pos.y-(168+48);
      }
      if (this.ghost.equals("Pinky"))
      { // 208, 216+48
        xDist = Math.abs(this.pos.x-208);
        yDist = Math.abs(this.pos.y-(216+48));
        xRelDirection = this.pos.x-208;
        yRelDirection = this.pos.y-(216+48);
      }
      if (this.ghost.equals("Inky"))
      { // 176, 216+48
        xDist = Math.abs(this.pos.x-240);
        yDist = Math.abs(this.pos.y-(216+48));
        xRelDirection = this.pos.x-240;
        yRelDirection = this.pos.y-(216+48);
      }
      if (this.ghost.equals("Clyde"))
      { // 240, 216+48
        xDist = Math.abs(this.pos.x-240);
        yDist = Math.abs(this.pos.y-(216+48));
        xRelDirection = this.pos.x-240;
        yRelDirection = this.pos.y-(216+48);
      }
      if (xDist>yDist && this.keepGoing==false) // If target is further L/R than U/D
      {
        if (xRelDirection>0) // Pac-Man to the Left
        {
          this.direction = 4; // left direction
          this.keepGoing = false; 
        }
        else if (xRelDirection<0) // Pac-Man to the right
        {
          this.direction = 2; // right direction
          this.keepGoing = false;
        }
      }
      else if (yDist>xDist && this.keepGoing==false) // If target further U/D than L/R
      {
        if (yRelDirection>0) // Pac-Man is up
        {
          this.direction = 1; // up direction
          this.keepGoing = false;
        }
        else if (yRelDirection<0) // Pac-Man is down
        {
          this.direction = 3; // down direction
          this.keepGoing = false;
        }
        else if (yRelDirection==0)
        {
          System.out.println("Same-Y");
          if (this.pos.x>208)
          {
            this.direction = 4;
            this.keepGoing = false;
          }
          else if (this.pos.x<208)
          {
            this.direction = 2;
            this.keepGoing = false;
          }
        }
      }
      if (this.pos.x>168 && this.pos.x<280 && this.pos.y == 216+48 && !(this.ghost.equals("Blinky")))
      {
        this.loadBarriers();
        if (ghost.equals("Pinky"))this.pos.setLocation(208, 264);
        if (ghost.equals("Inky"))this.pos.setLocation(176, 264);
        if (ghost.equals("Clyde"))this.pos.setLocation(240, 264);
        this.isEaten = false;
        this.isInBox = true;
        this.beNormal = true;
        this.direction = 0;
        this.isInBox = true;;
      }
      else if (this.pos.x>168 && this.pos.x<280 && this.pos.y == 216 && this.ghost.equals("Blinky"))
      {
        this.loadBarriers();
        if (ghost.equals("Blinky"))this.pos.setLocation(208, 168+48);
        this.isEaten = false;
        this.isInBox = true;
        this.beNormal = true;
        this.direction = 0;
        this.isInBox = true;;
      }
      // 344, 264 : pos.y == 264 
      // 200, 136 : pos.y == 136
      // 56, 264 : pos.y == 264
      return;
  }

  public static void blueMode(boolean setting)
  {
    if (setting)
    {
      Ghost.startBlueMode = System.currentTimeMillis();
      Ghost.currentBlueMode = (System.currentTimeMillis()-Ghost.startBlueMode)/(double)1000;
      Ghost.blueMode = true;
      Ghost.normalMode = false;
    }
    else
    {
      Ghost.ghostsEaten = 0;
      Ghost.blueMode = false;
      Ghost.normalMode = true;
      Ghost.startBlueMode = 0;
      Ghost.currentBlueMode = 0;
    }
  }

  public static boolean currentlyBlueMode()
  {
    return(Ghost.blueMode);
  }

  public static int ghostsConsumed()
  {
    return(Ghost.ghostsEaten);
  }

  public void getEaten()
  {
    this.displayPoints = true;
    // Add part to add the proper score to the player's score. Make board.ghost_value public and make the player's score(s) static.
    // Display 'eaten' score, and then display the eyes.
  }

  // Use specifically in the intro ghost animations
  public void getUnEaten()
  {
    this.isEaten = false;
    Ghost.ghostsEaten -= 0;
  }

  public boolean isEaten()
  {
    return(this.isEaten);
  }

  public boolean isNormal()
  {
    return(Ghost.normalMode || this.beNormal);
  }

  public boolean isInBox()
  {
    return(isInBox);
  }

  public void exitBox()
  {
    this.pos.translate(-8, 0);
    this.isInBox = false;
  }

  public Rectangle getTileBounds()
  {
    return(new Rectangle(this.pos.x-1, this.pos.y-1, 2, 2));
  }

  // Regularly update the ghost
  public void tick()
  {
    // this gets called once every tick, before the repainting process happens.
    // so we can do anything needed in here to update the state of the player
  
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

    if (this.isEaten && this.isInBox)
    {
      if (ghost.equals("Blinky"))pos.setLocation(208, 168+48);
      else if (ghost.equals("Pinky"))pos.setLocation(208, 216+48);
      else if (ghost.equals("Inky"))pos.setLocation(176, 216+48);
      else if (ghost.equals("Clyde"))pos.setLocation(240, 216+48);
    }
    
  }

  // returns the direction the ghost is moving
  public int getDirection()
  {
    return(direction);
  }

  // set the direction the ghost is moving
  public void setDirection(int dir)
  {
    this.direction = dir;
  }

  public boolean killedPac()
  {
    return(Ghost.killedPac);
  }

  // return the ghost's position
  public Point getPos() 
  {
    return pos;
  }

  // return the ghost's x position
  public int getX()
  {
    return(pos.x);
  }

  // return the ghost's y position
  public int getY()
  {
    return(pos.y);
  }

  // make the ghost go forward in whatever direction it's facing
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
      case(0): // No Movement
        pos.translate(0, 0);
        break;
    }
    this.direction = dir;
  }

  public void setPosition(int x, int y)
  {
    this.pos.setLocation(x, y);
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

  public void resetPacMan()
  {
    Ghost.killedPac = false;
  }

  public void killPacMan()
  {
    Ghost.killedPac = true;
  }

  public void reset()
  {
    Ghost.blueMode(false);
    // load the assets
    loadImage();
    loadImageList();
    loadBarriers();
    loadIntersections();

    // Reset the settings
    this.beNormal = false;
    Ghost.killedPac = false;
    this.keepGoing = false;
    this.isInBox = true;

    // initialize the state
    pos = new Point(0, 0);
    pacPosition = new Point(208, 360+48);
    pacDirection = 0;
    score = 0;
    direction = 0;
    if (ghost.equals("Blinky"))pos.setLocation(208, 168+48);
    else if (ghost.equals("Pinky"))pos.setLocation(208, 216+48);
    else if (ghost.equals("Inky"))pos.setLocation(176, 216+48);
    else if (ghost.equals("Clyde"))pos.setLocation(240, 216+48);
  }

  public void resetIntro()
  {
    // load the assets
    this.invisible();

    // Reset the settings
    Ghost.killedPac = false;
    Ghost.ghostsEaten = 0;
    this.keepGoing = false;
    this.isInBox = false;
    this.isEaten = false;
    this.beNormal = false;
    this.displayPoints = false;

    // initialize the state
    this.pos = pos;
    pacDirection = 0;
    score = 0;
    direction = 4;
  }

  // Return the position and boundary of the ghost
  public Rectangle getBounds() 
  {
    return new Rectangle((int)pos.getX(), (int)pos.getY(), 32, 32);
  }

}
