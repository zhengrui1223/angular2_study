export class Contact{
    contactId : string;//id
    // firstName : string;//名
    // middleName : string;//中间名
    // lastName : string;//姓
    // appellationOptions : Array<string>;//称谓下拉选项
    // appellation : string;//称谓
    customerName : string;//客户名
    immediateSupervisor : string;//直属上司
    job : string;//工作
    department : string;//部门
    email : string;//邮箱
    telephone : string;//电话
    // faz : string;//传真
    mobilePhone : string;//手机
    // emailStreet : string;//邮寄地址_街道
    // emailCity : string;//邮寄地址_城市
    // postcode : string;//邮政编码
    // emailCountry : string//邮寄地址_国家

   /* constructor(
                contactId : string,
                // firstName : string,
                // middleName : string,
                // lastName : string,
                // appellationOptions : string,
                // appellation : string,
                customerName : string,
                immediateSupervisor : string,
                job : string,
                department : string,
                email : string,
                telephone : string,
                // faz : string,
                mobilePhone : string
                // emailStreet : string,
                // emailCity : string,
                // postcode : string,
                // emailCountry : string
    ){}*/

    constructor(
        contactId : string,
        customerName : string,
        immediateSupervisor : string,
        job : string,
        department : string,
        email : string,
        telephone : string,
        mobilePhone : string
    ){}
}