package com.application.bakery.helpers.dto;

import lombok.Data;
import lombok.NonNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class TotalOrderDate {
    @NonNull
    String date;
    @NonNull
    Long totalOrder;

}
