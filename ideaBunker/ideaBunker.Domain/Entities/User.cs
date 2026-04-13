namespace ideaBunker.Domain.Models;
public record User(
    Guid UserId,
    string FirstName,
    string LastName,
    string email,
    string password
);

//estudar autenticação .net