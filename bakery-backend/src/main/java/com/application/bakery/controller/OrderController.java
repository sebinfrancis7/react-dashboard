package com.application.bakery.controller;

import com.application.bakery.entity.Order;
import com.application.bakery.exception.NotFoundException;
import com.application.bakery.helpers.dto.BranchCount;
import com.application.bakery.helpers.dto.TotalOrderDate;
import com.application.bakery.service.OrderService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderFromOrderId(@PathVariable long orderId) throws NotFoundException {
        Order order = this.orderService.getOrder(orderId);
        return new ResponseEntity<Order>(order, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> orders = this.orderService.getOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Long> saveOrder(@RequestBody Order order){
        long savedOrderId = this.orderService.saveOrder(order);
        return new ResponseEntity<Long>(savedOrderId, HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Order>> getOrdersByDateRange(@PathParam(value = "start") String start,
                                                        @PathParam(value = "end") String end){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalDateTime startDate = LocalDateTime.parse(start + " 00:00:00", formatter);
        LocalDateTime endDate = LocalDateTime.parse(end + " 00:00:00", formatter);
        System.out.println(startDate);
        List<Order> orders = this.orderService.getOrdersByDateRange(startDate, endDate);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/branches")
    public ResponseEntity<List<BranchCount>> getTopFiveBranches(){
        List<BranchCount> topFiveBranches = this.orderService.getTopFiveBranches();
        return new ResponseEntity<>(topFiveBranches, HttpStatus.OK);
    }

    @GetMapping("/timeseries")
    public ResponseEntity<List<TotalOrderDate>> getTotalOrderTimeSeries(){
        List<TotalOrderDate> response = this.orderService.getTotalOrderTimeSeries();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
