import React from 'react';
import { Form, Button, DatePicker, Notify } from 'zent';
import ajax from '@youzan/pc-ajax';

const { Field, InputField, createForm, SubmissionError } = Form;


const SubmitForm = (props) => {
  const { handleSubmit, zentForm } = props;
  const isSubmitting = zentForm.isSubmitting();

  let dataPick =  '';

  const submit = (values, zentForm) => {
    const fetchUrl = 'http://127.0.0.1:8201/zaniview/createroom';

    let requestData = {
      url: fetchUrl,
      method: 'POST',
      data: {
        ...values,
        dataPick: dataPick
      }
    };

    console.log(requestData);

    const promise = ajax(requestData).then(resp => resp.data).catch(resp => {
      throw resp;
    });

    return promise.then((resp) => {
      if (resp.code = 2000) {
        return '注册成功';
      }else {
        return '注册失败';
      }
    });
  };

  const onChangeDate = (value) => {
    dataPick = value;
  };

  return (
    <Form onSubmit={handleSubmit(submit)} horizontal>
      <Field
        name="user"
        type="text"
        component={InputField}
        label="候选人："
        value=""
        validations={{ required: true }}
        validationErrors={{ required: '用户名不能为空' }}
      />
      <Field
        name="phone"
        component={InputField}
        label="候选人手机号："
        validations={{
          validMobile(values, value) {
            let mobile = value;
            let mobileReg = /^\d{1,11}$/;
            return mobileReg.test(mobile);
          }
        }}
        validationErrors={{ validMobile: '请输入正确的手机号' }}
      />
      <div className="zent-form__control-group ">
        <label className="zent-form__control-label">预约面试时间：</label>
        <div className="zent-form__controls">
          <div className="zent-input-wrapper">
            <DatePicker
              className="zent-picker-demo"
              showTime
              value={dataPick}
              format="YYYY-MM-DD HH:mm:ss"
              onChange={onChangeDate}
            />
          </div>
        </div>
      </div>

      <div className="zent-form__form-actions">
        <Button type="primary" htmlType="submit" loading={isSubmitting}>创建房间</Button>
      </div>
    </Form>
  );
};

const WrappedForm = createForm()(SubmitForm);


class RoomForm extends React.Component {
  render() {
    const { close } = this.props;
    let onSubmitSuccess = () => {
      Notify.success('创建成功');
      close();
    };

    let onSubmitFail = () => {
      Notify.error('创建失败，请稍后再试');
    };


    return (
      <WrappedForm onSubmitFail={onSubmitFail} onSubmitSuccess={onSubmitSuccess} />
    );
  }
}

export default RoomForm;
