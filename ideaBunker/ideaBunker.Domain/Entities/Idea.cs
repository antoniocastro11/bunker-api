namespace ideaBunker.Domain.Models;

public record Idea(
    Guid Id,
    string Title,
    Guid UserId,
    User User
)
{
    string Description {get; init;}
    Status Status {get; set;}
    IdeaType IdeaType {get; set;}
    public DateTime CreatedAt {get; init;} = DateTime.UtcNow;
}
