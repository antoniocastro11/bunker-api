using ideaBunker.Domain.Models;

namespace ideaBunker.Domain.Interfaces;

public interface IUserReposutory
{
    Task<User>CreateAsync(User user);
    Task<User>UpdateAsync(User user);
    Task<User> GetByIdAsync(Guid userId);
    Task DeactivateAsync(Guid userId);
}
