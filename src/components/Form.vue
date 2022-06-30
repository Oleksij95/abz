<template>
  <div class="form">
    <div class="container">
      <h2 class="form_title h2_title">Working with POST request</h2>
      <form
        action=""
        id="send"
        class="sendForm"
        @submit.prevent="sendNewUser"
        ref="form"
      >
        <div class="form_item">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="userName"
            :class="{ error: errors.name.length }"
          />
          <div class="form_error" v-if="errors.name.length">
            {{ errors.name }}
          </div>
        </div>
        <div class="form_item">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            v-model="userEmail"
            :class="{ error: errors.email.length }"
          />
          <div class="form_error" v-if="errors.email.length">
            {{ errors.email }}
          </div>
        </div>
        <div class="form_item">
          <label for="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="userPhone"
            :class="{ error: errors.phone.length }"
          />
          <div class="small-text">+38 (XXX) XXX - XX - XX</div>
          <div class="form_error" v-if="errors.phone.length">
            {{ errors.phone }}
          </div>
        </div>
        <div class="form_item">
          <div class="form_item_select-position">Select your position</div>
          <div
            class="form_item_radio"
            v-for="position in positions"
            :key="position.id"
          >
            <input
              type="radio"
              name="position_id"
              :id="position.id"
              v-model="positionID"
              :value="position.id"
            />
            <label :for="position.id" class="positionLabel">{{
              position.name
            }}</label>
          </div>
        </div>

        <div class="form_item form_item_file">
          <div class="upload" :class="{ error: errors.photo.length }">
            <div class="upload_btn">Upload</div>
            <div class="upload_text">Upload your photo</div>
          </div>
          <div class="form_error" v-if="errors.photo.length">
            {{ errors.photo }}
          </div>

          <input
            type="file"
            accept="image/jpeg"
            placeholder="Upload your photo"
            name="photo"
            ref="photo"
            @input="loadPhoto"
          />
        </div>

        <div class="form_item">
          <button type="submit" class="form_submit">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: [],
      positionID: 1,
      userName: '',
      userEmail: '',
      userPhone: '',
      token: '',
      errors: {
        name: '',
        email: '',
        phone: '',
        photo: '',
      },
    };
  },
  beforeMount() {
    this.getPositions();
    this.getToken();
  },
  methods: {
    getPositions() {
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            this.positions = data.positions;
          }
        });
    },
    getToken() {
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            this.token = data.token;
          }
        });
    },
    formValidation() {
      let formIsValid = true;
      if (this.userName.trim() === '') {
        this.errors.name = 'This field is not valid';
        formIsValid = false;
      } else {
        this.errors.name = '';
        formIsValid = true;
      }

      if (!this.validateEmail(this.userEmail)) {
        this.errors.email = 'This field is not valid';
        formIsValid = false;
      } else {
        this.errors.email = '';
        formIsValid = true;
      }

      if (!this.validatePhone(this.userPhone)) {
        this.errors.phone = 'This field is not valid';
        formIsValid = false;
      } else {
        this.errors.phone = '';
        formIsValid = true;
      }

      if (this.$refs.photo.files.length === 0) {
        this.errors.photo = 'This field is required';
        formIsValid = false;
      } else {
        this.errors.photo = '';
        formIsValid = true;
      }

      return formIsValid;
    },

    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },

    validatePhone(phone) {
      return String(phone).match(/^(\+{1}[0-9]{12})$/);
    },

    sendNewUser() {
      if (!this.formValidation()) {
        return;
      }

      let formData = new FormData(this.$refs.form);
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: { Token: this.token },
      })
        .then((respone) => {
          return respone.json();
        })
        .then((data) => {
          if (data.success) {
            this.$emit('successRegister');
            this.$root.$emit('reloadUsers');
          }
        });
    },
    loadPhoto() {
      document.querySelector('.upload_text').innerText =
        this.$refs.photo.files.item(0).name;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  margin-top: 140px;
  &_error {
    color: $errorColor;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-top: 2px;
    padding-left: 16px;
    position: absolute;
  }
  &_submit {
    background: #b4b4b4;
    border-radius: 80px;
    padding: 4px 23px;
    color: rgba(255, 255, 255, 0.87);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    display: block;
  }
  .sendForm {
    max-width: 380px;
    margin: 50px auto;
    .small-text {
      font-size: 12px;
      line-height: 14px;
      color: #7e7e7e;
      padding-left: 20px;
      margin-top: 2px;
    }
    .form_item_file {
      position: relative;
      .upload {
        position: absolute;
        z-index: 1;
        background: $backgroundColor;
        border: 1px solid #d0cfcf;
        border-radius: 4px;
        cursor: pointer;
        pointer-events: none;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        &.error {
          border: 1px solid $errorColor;
          .upload_btn {
            border: 1px solid $errorColor;
          }
        }
        &_btn {
          background: #fff;
          position: absolute;
          height: 100%;
          width: 83px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.87);
          border-radius: 4px 0px 0px 4px;
        }
        &_text {
          padding-left: 100px;
          color: #7e7e7e;
        }
        .form_error {
          bottom: -22px;
        }
      }
    }
  }
  &_item {
    margin-bottom: 50px;
    .form_item_select-position {
      margin-bottom: 11px;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: rgba(0, 0, 0, 0.87);
    }
    label {
      display: block;
      position: relative;
      &.positionLabel {
        padding-left: 35px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.87);
        margin: 7px 0;
        cursor: pointer;
        &::before {
          content: '';
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1px solid #d0cfcf;
        }
        &::after {
          content: '';
          width: 10px;
          height: 10px;
          position: absolute;
          top: 6px;
          left: 6px;
          border-radius: 50%;
          background: $secondaryColor;
          opacity: 0;
        }
      }
    }
    input {
      border: 1px solid #d0cfcf;
      border-radius: 4px;
      padding: 14px 16px;
      width: 100%;
      box-sizing: border-box;
      &.error {
        border: 2px solid $errorColor;
      }
    }
    input[name='position_id'] {
      display: none;
    }
    input[name='position_id']:checked + label::before {
      border: 1px solid $secondaryColor;
    }
    input[name='position_id']:checked + label::after {
      opacity: 1;
    }
  }
}
</style>
