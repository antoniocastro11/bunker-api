using ideaBunker.Domain.Models;

public class UpdateIdeaDto
{
    public Guid IdeaId {get; set; }
    public Guid UserId {get; set; }
    public User user {get; set; }
    public string Title {get; set; }
    public string Description {get; set; }
    public Status status {get; set; }
    public IdeaType ideaType {get; set; }
}