* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* Center the game on the screen */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #333; /* Dark background for the rest of the page */
  overflow: hidden; /* Hide scrollbars */
}

#game-container {
  position: relative;
  width: 400px;
  height: 600px;
  background-color: #87CEEB; 
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden; 
}

#bird {
  position: absolute; 
  width: 40px;
  height: 40px;
  background-color: #FF5733; 
  border-radius: 50%; 
  /* Add a transition for smooth movement */
  transition: top 0.05s linear; 
}

.pipe {
  position: absolute;
  width: 60px;
  background-color: #00FF00; 
}
using UnityEngine;
using UnityEngine.SceneManagement; // Required to restart the scene

public class BirdController : MonoBehaviour
{
    public float flapStrength = 5f; // Adjustable jump force
    private Rigidbody2D myRigidbody;
    public bool isAlive = true;

    void Start()
    {
        myRigidbody = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        // Flap when space bar is pressed, only if alive
        if (Input.GetKeyDown(KeyCode.Space) && isAlive)
        {
            // Set velocity to move up, rather than adding force for consistent jumps
            myRigidbody.velocity = Vector2.up * flapStrength;
        }

        // Optional: Add game over check if falling off-screen
        if (transform.position.y > 10 || transform.position.y < -10)
        {
            GameOver();
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        // Triggered when hitting pipes or ground
        GameOver();
    }

    void GameOver()
    {
        isAlive = false;
        // Freeze the game (optional, or handle in a GameManager)
        Time.timeScale = 0;
        Debug.Log("Game Over");
        // To restart: SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}

.score {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000;
}
