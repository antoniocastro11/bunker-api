using ideaBunker.Domain.Models;

namespace ideaBunker.Domain.Interfaces;

public interface IIdeaReposutory
{
    Task<Idea>CreateAsync(Idea idea);
    Task<Idea>UpdateAsync(Idea idea);
    Task<Idea>GetAllAsync(Guid userId);
    Task <Idea>GetById(Guid ideaId);
    Task DeactivateAsync(Guid ideaId);

}