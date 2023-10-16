package com.application.bakery.helpers.dto;

import lombok.*;

@Data
public class BranchCount {
    @NonNull
    int branch;

    @NonNull
    long count;
}
