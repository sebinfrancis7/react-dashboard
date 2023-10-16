package com.application.bakery.service;

import com.application.bakery.entity.Order;
import com.application.bakery.exception.NotFoundException;
import com.application.bakery.helpers.dto.BranchCount;
import com.application.bakery.helpers.dto.TotalOrderDate;
import com.application.bakery.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public Order getOrder(long orderId) throws NotFoundException {
        Optional<Order> order = orderRepository.findById(orderId);
        if(order.isEmpty()){
            throw new NotFoundException("The order with given ID does not exists");
        } else {
            return order.get();
        }
    }

    @Override
    public long saveOrder(Order order){
        Order savedOrder = orderRepository.save(order);
        return savedOrder.getId();
    }

    @Override
    public List<Order> getOrders() {
        return this.orderRepository.findAll();
    }

    @Override
    public List<Order> getOrdersByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return this.orderRepository.findByLastUpdateTimeBetweenOrderByLastUpdateTimeAsc(startDate, endDate);
    }

    @Override
    public List<BranchCount> getTopFiveBranches() {
        return this.orderRepository.getTop5Branches();
    }

    @Override
    public List<TotalOrderDate> getTotalOrderTimeSeries() {
        return this.orderRepository.getTotalOrderWithDate();
    }
}
