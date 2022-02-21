import java.awt.image.BufferedImage;
import java.awt.image.ImageObserver;
import java.awt.Graphics;
import java.awt.Point;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.Rectangle;

public class Fruit
{
  private BufferedImage image;
  private int level, width, height;
  private double start, duration, startPTS, durationPTS;
  private boolean displayPoints, isEaten;
  private Point pos;

  public Fruit()
  {
    displayPoints = false;
    isEaten = false;
    pos = new Point(208, 408);
    start = 0;
    duration = 0;
    loadImage();
  }

  private void loadImage()
  {
    try
    {
      if (level==1) image = ImageIO.read(new File("images/Fruits/Cherry.png"));
      else if (level==2) image = ImageIO.read(new File("images/Fruits/Strawberry.png"));
      else if (level==3 || level==4) image = ImageIO.read(new File("images/Fruits/Peach.png"));
      else if (level==5 || level==6) image = ImageIO.read(new File("images/Fruits/Apple.png"));
      else if (level==7 || level==8) image = ImageIO.read(new File("images/Fruits/Melon.png"));
      else if (level==9 || level==10) image = ImageIO.read(new File("images/Fruits/GalaxianStarship.png"));
      else if (level==11 || level==12) image = ImageIO.read(new File("images/Fruits/Bell.png"));
      else if (level>=13) image = ImageIO.read(new File("images/Fruits/Key.png"));
      // If the fruit has been displayed for 10 seconds, turn it off
      if (duration>=10 || start==0)
      {
        image = ImageIO.read(new File("images/Invisible.png"));
        start = 0;
        duration = 0;
      }
    }
    catch (Exception exc)
    {
      System.out.println("Error loading image file. "+exc);
    }
    width = 32;
    height = 32;
  }

  public void updateImage()
  {
    try
    {
      if (displayPoints || (durationPTS<=4 && startPTS!=0))
      {
        if (level==1)
        {
          image = ImageIO.read(new File("images/Scores/100.png"));
          if (displayPoints)
          {
            Player.addScore(100);
          }
        }
        else if (level==2)
        {
          image = ImageIO.read(new File("images/Scores/300.png"));
          if(displayPoints) Player.addScore(300);
        }
        else if (level==3 || level==4)
        {
          image = ImageIO.read(new File("images/Scores/500.png"));
          if(displayPoints) Player.addScore(500);
        }
        else if (level==5 || level==6)
        {
          image = ImageIO.read(new File("images/Scores/700.png"));
          if(displayPoints) Player.addScore(700);
        }
        else if (level==7 || level==8)
        {
          image = ImageIO.read(new File("images/Scores/1000.png"));
          if(displayPoints) Player.addScore(1000);
        }
        else if (level==9 || level==10)
        {
          image = ImageIO.read(new File("images/Scores/2000.png"));
          if(displayPoints) Player.addScore(2000);
        }
        else if (level==11 || level==12)
        {
          image = ImageIO.read(new File("images/Scores/3000.png"));
          if(displayPoints) Player.addScore(3000);
        }
        else if (level>=13)
        {
          image = ImageIO.read(new File("images/Scores/5000.png"));
          if(displayPoints) Player.addScore(5000);
        }
        displayPoints = false;
        isEaten = true;
      }
      else if (durationPTS>4)
      {
        durationPTS = 0;
        startPTS = 0;
        stop();
      }
    }
    catch (IOException exc)
    {
      System.out.println("Error loading image file. "+exc);
    }
  }

  public void tick()
  {
    level = Board.level;
    if (start != 0) 
    {
      // Calculate the duration the fruit has been on the screen
      duration = (System.currentTimeMillis()-start)/1000;
      // If fruit has been on-screen for 10 seconds, remove it.
      if (startPTS!=0) 
      {
        durationPTS = (System.currentTimeMillis()-start)/1000;
      }
      if (duration>=10) 
      {
        stop();
        durationPTS = 0;
        startPTS = 0;
      }
    }
  }

  public void draw(Graphics g, ImageObserver observer) 
  {
    g.drawImage(image, pos.x*Board.TILE_SIZE, pos.y*Board.TILE_SIZE, observer);
  }

  public boolean isEaten()
  {
    return(isEaten);
  }

  public void stop()
  {
    start = 0;
    duration = 0;
    displayPoints = false;
    loadImage();
  }

  public void start()
  {
    displayPoints = false;
    start = System.currentTimeMillis();
    duration = (System.currentTimeMillis()-start)/1000;
    loadImage();
    pos = new Point(208, 408);
  }

  public void getEaten(boolean on)
  {
    if (on)
    {
      if (startPTS==0)
      {
        startPTS = System.currentTimeMillis();
      }
      displayPoints = true;
    }
    else
    {
      displayPoints = false;
      durationPTS = 0;
      startPTS = 0;
    }
  }

  public Rectangle getBounds()
  {
    return(new Rectangle(pos.x, pos.y, width, height));
  }
}