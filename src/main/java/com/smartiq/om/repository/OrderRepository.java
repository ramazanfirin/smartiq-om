package com.smartiq.om.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smartiq.om.domain.Order;

/**
 * Spring Data SQL repository for the Order entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	@Query(
	        "select order from Order order where order.orderId=:orderId"
	    )
	    List<Order> getOrderByOrderId(@Param(value = "orderId") Long orderId);
}
