import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { OrdersStatusList } from "../enum/enum.order";
import { OrdersStatus } from "@prisma/client";

export class OrderPaginationDto extends PaginationDto {

    @IsOptional()
    @IsEnum( OrdersStatusList, {
        message: `Valid status are ${ OrdersStatusList }`
    })
    status?: OrdersStatus;
} 