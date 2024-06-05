# Project Overview

This project is developed using .NET Core with REST API technology.

### Validation and Security
- I implemented comprehensive validations.
- For added security, password strength is enforced using `zxcvbn`.

### Project Structure
The project is composed of 3 layers:
1. **Controller Layer**
2. **Business Layer Service (BL)**
3. **Data Layer Repository (DL)**

These layers communicate with each other via Dependency Injection (DI). DI provides numerous advantages such as greater flexibility and easier testing.

### ORM
I use a DB-first approach with Entity Framework. To run the project, use commands like `add-migration` and others as needed.

### Asynchronous Programming
To ensure scalability, all functions are implemented using `async` and `await`.

### Data Insertion
Data insertion was handled in a separate project. [Data Insertion Project](https://github.com/yaelProg/SQL-C_sharp-WebAPI-Store)

### Documentation
All functionalities are documented using Swagger.

### DTO Layer
Considerable focus was placed on writing the DTO layer to prevent circular dependencies and to encapsulate data. Conversions are handled using `AutoMapper`.

### Configuration Files
- The connection string is currently stored in `appsettings.json`, but it should be moved to `User Secrets` for security reasons.

### Error Handling
Errors are handled properly. Real-time email notifications are sent to the admin, and all errors are logged.

### Traffic Monitoring
Traffic is logged in the `rating` table for monitoring purposes.

### Protocol
The project uses the HTTPS protocol.

### Database Integration
Product prices are fetched from the database to ensure consistency.
