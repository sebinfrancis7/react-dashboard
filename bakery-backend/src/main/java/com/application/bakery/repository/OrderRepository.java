package com.application.bakery.repository;

import com.application.bakery.entity.Order;
import com.application.bakery.helpers.dto.BranchCount;
import com.application.bakery.helpers.dto.TotalOrderDate;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository <Order, Long>{

    List<Order> findByLastUpdateTimeBetweenOrderByLastUpdateTimeAsc(LocalDateTime startDate, LocalDateTime endDate);

    @Query("SELECT new com.application.bakery.helpers.dto.BranchCount(o.branch, count(o.branch)) FROM orders o GROUP BY o.branch ORDER BY count(o.branch) DESC LIMIT 5")
    List<BranchCount> getTop5Branches();

    @Query("SELECT new com.application.bakery.helpers.dto.TotalOrderDate(TO_CHAR(o.lastUpdateTime, 'YYYY-MM-DD'), count(o)) FROM orders o GROUP BY TO_CHAR(o.lastUpdateTime, 'YYYY-MM-DD') ORDER BY TO_CHAR(o.lastUpdateTime, 'YYYY-MM-DD') ASC")
    List<TotalOrderDate> getTotalOrderWithDate();
}
