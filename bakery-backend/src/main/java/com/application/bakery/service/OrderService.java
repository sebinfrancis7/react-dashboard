package com.application.bakery.service;

import com.application.bakery.entity.Order;
import com.application.bakery.exception.NotFoundException;
import com.application.bakery.helpers.dto.BranchCount;
import com.application.bakery.helpers.dto.TotalOrderDate;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.util.Pair;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderService {
    Order getOrder(long orderId) throws NotFoundException;

    long saveOrder(Order order);

    List<Order> getOrders();

    List<Order> getOrdersByDateRange(LocalDateTime startDate, LocalDateTime endDate);

    List<BranchCount> getTopFiveBranches();

    List<TotalOrderDate> getTotalOrderTimeSeries();
}
