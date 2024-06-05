////using Entities;

//using DTOs;

//namespace Repositories
//{
//    public interface IOrderRepository
//    {
//        Task<User> addOrder(User user);
//        Task<User> GetUserByEmailAndPassword(UserLoginDto userLogin);
//        Task<User> getUserById(int id);
//        Task<User> updateUser(int id, User userToUpdate);
//    }
//}

using DTOs;

namespace Repositories
{
    public interface IOrderRepository
    {
        Task<Order> addOrder(Order order);
        Task<Order> getOrderById(int id);
        Task<Order> getAllOrders();
        //Task<Order> updateOrder(int id, Order OrderToUpdate);
    }
}
