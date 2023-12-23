import java.util.ArrayList;
import java.util.Scanner;

class LevelingShot {
    int id;
    String description;
    double elevation;

    public LevelingShot(int id, String description, double elevation) {
        this.id = id;
        this.description = description;
        this.elevation = elevation;
    }
}

public class DifferentialLeveling {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Initialize variables
        double initialElevation;
        double currentHeightOfInstrument;
        ArrayList<LevelingShot> levelingShots = new ArrayList<>();

        // User input for initial elevation
        System.out.print("Enter the initial elevation: ");
        initialElevation = scanner.nextDouble();
        currentHeightOfInstrument = initialElevation;

        // User input loop for shots
        int shotId = 1;
        while (true) {
            System.out.print("Is this a backsight? (y/n): ");
            boolean isBacksight = scanner.next().equalsIgnoreCase("y");

            scanner.nextLine();

            System.out.print("Enter the description of the shot: ");
            String description = scanner.nextLine();

            System.out.print("Enter the foresight value: ");
            double foresight = scanner.nextDouble();

            scanner.nextLine();

            // Calculate elevation for the shot
            double elevation;
            if (isBacksight) {
                currentHeightOfInstrument = initialElevation + foresight;
                elevation = currentHeightOfInstrument;
            } else {
                elevation = currentHeightOfInstrument - foresight;
            }

            // Store the leveling shot
            levelingShots.add(new LevelingShot(shotId, description, elevation));

            // Display the current state
            System.out.println("Shot " + shotId + ": " + description + ", Elevation: " + elevation);

            // Ask if the user wants to continue
            System.out.print("Do you want to continue? (y/n): ");
            if (!scanner.next().equalsIgnoreCase("y")) {
                break;
            }

            shotId++;
        }

        // Display the final list of leveling shots
        System.out.println("\nFinal List of Leveling Shots:");
        for (LevelingShot shot : levelingShots) {
            System.out.println("Shot " + shot.id + ": " + shot.description + ", Elevation: " + shot.elevation);
        }
    }
}
