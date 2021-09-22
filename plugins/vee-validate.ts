import { required, email } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'

setInteractionMode('custom', ({ errors, value }) => {
  if (errors.length) {
    return {
      on: ['input', 'change']
    };
  }

  if (value) {
    return {
      on: ['blur']
    };
  }

  return { on: ['submit'] };
})

extend('required', {
  ...required,
  message: (name) => `${name}不能为空！`
})

extend('email', {
  ...email,
  message: (name) => `请输入正确的邮箱！`
})

extend('gradeOne', {
  validate: (value: number) => parseInt(value.toString().slice(0, 2), 10) === 21,
  message: '请输入正确的大一学号'
})

extend('gradeTwo', {
  validate: (value: number) => {
    const grade = parseInt(value.toString().slice(0, 2), 10)
    return grade === 21 || grade === 20
  },
  message: '请输入正确学号'
})

extend('name', {
  validate: (value: string) => !!value.match(new RegExp(`^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$`)),
  message: '请输入正确的姓名'
})