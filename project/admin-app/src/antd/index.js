import Button from "ant-design-vue/lib/button"
import Input from "ant-design-vue/lib/input"
import Menu from "ant-design-vue/lib/menu"
import Dropdown from "ant-design-vue/lib/dropdown"
import Form from "ant-design-vue/lib/form"
import List from "ant-design-vue/lib/list"
import Avatar from "ant-design-vue/lib/avatar"
import Spin from "ant-design-vue/lib/spin"
import Select from "ant-design-vue/lib/select"
import message from "ant-design-vue/lib/message";
import DatePicker from "ant-design-vue/lib/date-picker";
import Radio from "ant-design-vue/lib/radio";
import "ant-design-vue/dist/antd.css"

export const useAntD = (app) => {
    app.provide("$message",message)
    app.use(Button)
    app.use(Input)
    app.use(Menu)
    app.use(Dropdown)
    app.use(Form)
    app.use(List)
    app.use(Avatar)
    app.use(Spin)
    app.use(Select)
    app.use(DatePicker)
    app.use(Radio)
}