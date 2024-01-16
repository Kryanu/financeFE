<template>
  <PageTemplate title="Retrieve Company Data" :filters="CONSOLE_LIST" @listItemSelected="handleListItemSelected" :isShowBack="false">
    <template v-slot:content>
      <div class="flex flex-col p-4 items-center w-full">
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl">Input Company Ticker</h1>
          <h1 v-if="status !== undefined" class="text-xl">{{ `Status: ${statusText}` }}</h1>
          <input class="rounded-md p-2" v-model="ticker" />
          <div class="flex space-x-4 p-2">
            <button @click="retrieveAppropriateData" class="flex justify-center mx-auto px-4 py-2 rounded-md bg-ocean-blue text-cloud-white shadow-3xl active:shadow-lg">
              Retrieve Data
            </button>
            
            <button @click="handleRouter" class="flex justify-center mx-auto px-4 py-2 rounded-md bg-ocean-blue text-cloud-white shadow-3xl active:shadow-lg">
              View Score
            </button>
          </div>
        </div>

        <Badge
          v-if="!!error"
          customClasses="w-fit px-4 bg-red-300 my-2"
          :text="error"
        />
        <div
          class="flex basis-full items-center justify-center mt-4 rounded-md w-1/2"
        ></div>
      </div>
    </template>
  </PageTemplate>
</template>
<!-- implement retrieve all docs and also company overview -->
<script>
import { mapActions } from 'pinia';
import { useApiStore } from '../../stores/counter';
import { Badge, Card } from '../atoms';
import { PageTemplate } from '.';
import { API_STATUS, CONSOLE_LIST } from '../../constants';

export default {
  components: {
    Card,
    Badge,
    PageTemplate,
  },
  data() {
    return {
      ticker: '',
      status: undefined,
      error: undefined,
      CONSOLE_LIST
    };
  },
  computed:{
    isViewDisabled(){
      return this.status === API_STATUS.failed
    },
    statusText(){
      switch(this.status){
        case API_STATUS.failed:
          return 'Failed :('
        case API_STATUS.success:
          return 'Success :)'
        case API_STATUS.loading:
          return 'Loading... -_-'
        default:
          return ''
      }
    }
  },
  methods: {
    ...mapActions(useApiStore, [
      'retrieveCompanyStatements'
    ]),
    async retrieveAppropriateData() {
      this.status = API_STATUS.loading
      debugger;
      if (this.ticker.trim() === '') {
        this.error = 'Please Insert a ticker';
        this.handleError();
        return;
      }
      this.error = undefined;
      try {
        // await this.retrieveCompanyStatements(this.ticker)
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.handleSuccess();
      } catch (ex) {
        this.handleError(ex);
      }
    },
    handleError(ex) {
      if (ex) {
        console.log(ex);
      }
      this.status = API_STATUS.failed;
    },
    handleSuccess() {
      this.status = API_STATUS.success;
    },
    handleRouter() {
      if (this.ticker !== '' && this.ticker) {
        this.$router.push({
          name: 'companyScore',
          params: {
            ticker: this.ticker,
          },
        });
      }else {
        this.error = 'Ticker is not defined'
      }
    },
    handleListItemSelected(index) {
      this.$router.push({
        name: CONSOLE_LIST[index]
      })
    }
  },
};
</script>
