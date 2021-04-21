import { ApiProperty } from '@nestjs/swagger';

export default class PostParams {
    private _category_id?: number;
    private _total_result?: number;
    private _page?: number;

    constructor(
        _category_id?: number,
        _total_result?: number,
        _page?: number,
    ) {
        this._category_id = _category_id;
        this._total_result = _total_result;
        this._page = _page;
    }

    @ApiProperty({ required: false })
    get total_result(): number {
        return this._total_result;
    }
    set total_result(value: number) {

        this._total_result = value;
    }

    @ApiProperty({ required: false })
    get page(): number {
        return this._page;
    }
    set page(value: number) {
        this._page = value;
    }
    @ApiProperty({ required: false })
    get category_id(): number {
        return this._category_id;
    }
    set category_id(value: number) {
        this._category_id = value;
    }
}
