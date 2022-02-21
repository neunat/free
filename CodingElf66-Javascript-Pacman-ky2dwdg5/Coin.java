import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.awt.image.ImageObserver;
import java.awt.Point;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import java.awt.Rectangle;

public class Coin 
{    
    // image that represents the coin's position on the board
    private BufferedImage image;
    // current position of the coin on the board grid
    private Point pos;
    // the specific type of coin
    private String type;

    public Coin(int x, int y) 
    {
      // load the assets
      loadDot();
      // initialize the state
      type = "dot";
      pos = new Point(x, y);
    }

    public Coin(String type, int x, int y) 
    {
      if (type.equals("pellet"))
      {
        // load the assets
        loadPellet();
        // initialize the state
        pos = new Point(x, y);
        this.type = "pellet";
      }
      else
      {
        // load the assets
        loadDot();
        // initialize the state
        pos = new Point(x, y);
        this.type = "dot";
      }
    }

    private void loadDot() 
    {
      try 
      {
        // you can use just the filename if the image file is in your
        // project folder, otherwise you need to provide the file path.
        image = ImageIO.read(new File("images/Dot.png"));
      }
      catch (IOException exc) 
      {
        System.out.println("Error opening image file: " + exc.getMessage());
      }
    }

    private void loadPellet()
    {
      try 
      {
          // you can use just the filename if the image file is in your
          // project folder, otherwise you need to provide the file path.
          image = ImageIO.read(new File("images/PowerPellet.png"));
        }
        catch (IOException exc) 
        {
          System.out.println("Error opening image file: " + exc.getMessage());
        }
    }

    public void draw(Graphics g, ImageObserver observer) {
        // with the Point class, note that pos.getX() returns a double, but 
        // pos.x reliably returns an int. https://stackoverflow.com/a/30220114/4655368
        // this is also where we translate board grid position into a canvas pixel
        // position by multiplying by the tile size.
        g.drawImage(
            image, 
            pos.x * Board.TILE_SIZE, 
            pos.y * Board.TILE_SIZE, 
            observer
        );
    }

    public Point getPos() 
    {
        return pos;
    }

    public int getX()
    {
      return(pos.x);
    }

    public int getY()
    {
      return(pos.y);
    }

    public String getType()
    {
      return(type);
    }

    public Rectangle getBounds()
    {
      return(new Rectangle((int)pos.getX(), (int)pos.getY(), 16, 16));
    }
}
