
import { Component, Vue, Emit } from "nuxt-property-decorator"
import { ValidationObserver } from "vee-validate"
import { UserModel } from "~/type"
import { addUser } from "~/utils/api"

@Component
class ApplyMixin extends Vue {
  private loading = false
  user!: UserModel


  @Emit()
  applyFail(msg: string) {
    return msg
  }

  public onSubmit(e: Event) {
    if (this.$refs === undefined) return
    const observer = this.$refs.observer as InstanceType<typeof ValidationObserver> 

    observer.validate().then((valid: boolean) => {

      if (valid) {
        
        this.loading = true
        addUser({
          ...this.user,
          email: this.user.email.trim().length === 0 ? this.user.qq + '@qq.com' : this.user.email
        }).then(response => {
          if (response.status !== 404) {
            this.$router.push('/apply/success') 
          } else {
            this.loading = false
            this.applyFail('内部错误，请联系群管理员。')
          }
          
        }).catch((e) => {
          this.loading = false
          this.applyFail(e)
        })
      }
    })
    .catch((e: string) => {
      throw new Error(e)
    })
  }
}

export default ApplyMixin