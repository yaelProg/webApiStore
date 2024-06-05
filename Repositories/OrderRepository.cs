//using DTOs;
//using Microsoft.EntityFrameworkCore;
//using System.Text.Json;

//namespace Repositories

//{
//    public class OrderRepository : IOrderRepository
//    {
//        private MyStore_325905206Context _picturesStoreContext;
//        public OrderRepository(MyStore_325905206Context picturesStoreContext)
//        {
//            _picturesStoreContext = picturesStoreContext;
//        }

//        public Task<User> addOrder(User user)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<User> GetUserByEmailAndPassword(UserLoginDto userLogin)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<User> getUserById(int id)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<User> updateUser(int id, User userToUpdate)
//        {
//            throw new NotImplementedException();
//        }
//    }
//}


using DTOs;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace Repositories

{

    public class OrderRepository : IOrderRepository
    {
        private MyStore_325905206Context _picturesStoreContext;
        public OrderRepository(MyStore_325905206Context picturesStoreContext)
        {
            _picturesStoreContext = picturesStoreContext;
        }

        //public async Task<Order> addOrder(Order order)
        //{
        //    await _picturesStoreContext.Orders.AddAsync(order);
        //    await _picturesStoreContext.SaveChangesAsync();
        //    return order;
        //}
        public async Task<Order> addOrder(Order order)
        {
            try
            {
                await _picturesStoreContext.Orders.AddAsync(order);
                await _picturesStoreContext.SaveChangesAsync();
                return order;
            }
            catch (Exception err)
            {
                return null;
            }
        }



        public Task<Order> getAllOrders()
        {
            throw new NotImplementedException();
        }

        public Task<Order> getOrderById(int id)
        {
            throw new NotImplementedException();
        }
    }
}


