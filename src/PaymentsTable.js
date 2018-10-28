import {Component} from "react";
import {DataTable, IconButton, TableHeader, Tooltip} from "react-mdl";
import React from "react";

class PaymentsTableActionButtons extends Component {
    render() {
        return (
            <div>
                <Tooltip label="Дублировать" position="left">
                    <IconButton ripple id="italic" name="file_copy" />
                </Tooltip>
                <Tooltip label="Удалить" position="right">
                    <IconButton ripple id="italic" name="delete_outline" />
                </Tooltip>
            </div>
        );
    }
}

class PaymentsTable extends Component {
    render() {
        return (
            <DataTable  style={{width: '100%'}}
                        selectable
                        shadow={0}
                        rowKeyColumn="id"
                        rows={[
                            {id: 1001, date: '22.10.2018', material: 'Acrylic (Transparent)', quantity: <PaymentsTableActionButtons/>, price: 2.90},
                            {id: 1002, date: '20.09.2018', material: 'Plywood (Birch)', quantity: <PaymentsTableActionButtons/>, price: 1.25},
                            {id: 1003, date: '20.09.2018', material: 'Laminate (Gold on Blue)', quantity: <PaymentsTableActionButtons/>, price: 2.35}
                        ]}
            >
                <TableHeader name="date">{this.props.title}</TableHeader>
                <TableHeader name="material">Операция</TableHeader>
                <TableHeader numeric name="quantity">Действия</TableHeader>
                <TableHeader numeric name="price" cellFormatter={(price) => `${price.toFixed(2)} \₽`} tooltip="Price pet unit"> </TableHeader>
            </DataTable>
        );
    }
}

export default PaymentsTable;
