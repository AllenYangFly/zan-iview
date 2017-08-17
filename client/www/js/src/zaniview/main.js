import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from 'zent';
import 'zent/css/index.css';
import TableList from './components/TableList';

import RoomForm from './components/RoomForm';
const { openDialog, closeDialog } = Dialog;
const DialogId = 'my_createRoom';

class Wrap extends TableList {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  createRoom = () => {
    openDialog({
      dialogId: DialogId,
      title: '创建面试房间',
      children: <RoomForm close={() => closeDialog(DialogId)} />
    });
  }

  render() {
    return (
      <div className="table-content">
        <div className="page-create__title">
          面试列表
          <Button type="primary" outline size="small" className="create__room" onClick={this.createRoom}>新建房间</Button>
        </div>

        <TableList />
      </div>
    );
  }
}

ReactDOM.render(<Wrap />, document.getElementById('app'));
