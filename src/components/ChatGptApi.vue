<template>
  <div>
    <div>
      <input type="text" placeholder="请输入你的问题" v-model="text">
    </div>
    <div>
      <button @click='onsubmit'>测试接口</button>
    </div>
    <div>
      <markdown-renderer :markdownString="result" v-if="flag" />
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import MarkdownRenderer from './ww'; // 替换为实际路径
export default {
  components: {
    MarkdownRenderer
  },
  data() {
    return {
      text: null,

      result: '',


      flag: false,
      responseData: ''
    }
  },
  methods: {
    onsubmit() {
      let data = {
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "user",
            "content": this.text
          }
        ]
      }

      axios.post('https://api.openai.com/v1/chat/completions', data,
        {
          headers: {
            'Authorization': `Bearer sk-d***********kFJpyOD7ABn3AOUOPH0sQuU`,
            'Content-Type': 'application/json'
          },
          timeout: 250000
        }
      ).then(res => {
        console.log(res.data.choices[0].message.content)

        this.result = res.data.choices[0].message.content

        this.flag = true
      })
    },


  }
}

</script>

<style scoped>

</style>
