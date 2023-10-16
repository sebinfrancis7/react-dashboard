package com.application.bakery.entity;

import com.application.bakery.helpers.dto.TotalOrderDate;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Entity(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @NonNull
    @Enumerated(EnumType.STRING)
    ItemType itemType;
    @NonNull
    @Enumerated(EnumType.STRING)
    OrderState orderState;

    @UpdateTimestamp
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    LocalDateTime lastUpdateTime;
    @NonNull
    int branch;
    @NonNull
    int customer;
}
