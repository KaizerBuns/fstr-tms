<template>
  <div class="flex flex-col h-screen">
    <div
        class="flex flex-nowrap fixed w-full items-baseline top-0 px-6 py-4 bg-gray-100"
    >
      <div class="text-2xl font-bold text-black">Chatbot</div>
    </div>

    <div class="flex-1 mx-2 mt-20 mb-2" ref="chatListDom">
      <div
          class="group flex flex-col px-4 py-3 hover:bg-slate-100 rounded-lg"
          v-for="(item, idx) of messageList.filter((v) => v.role !== 'system')"
          :key="idx"
      >
        <div class="flex justify-between items-center mb-2">
          <div class="font-bold text-black">{{ roleAlias[item.role] }}：</div>
          <Copy class="invisible group-hover:visible" :content="item.content"/>
        </div>
        <div>
          <pre v-if="item.content" class="prose text-sm text-black leading-relaxed">{{ parseAndBeautifyJSON(item.content) }}</pre>
          <Loading v-else/>
        </div>
      </div>
    </div>

    <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
      <div class="flex">
        <input
            class="input text-black"
            type="text"
            placeholder="message"
            v-model="messageContent"
            @keydown.enter="isTalking"
        />
        <button class="btn text-black" :disabled="isTalking" @click="send()">Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, nextTick} from "vue";
import {chat} from "@/libs/gpt.js";
import Loading from "@/components/gpt/GptLoading.vue";
import Copy from "@/components/gpt/GptCopy.vue";
// import {md} from "@/libs/markdown";

let isTalking = ref(false);
let messageContent = ref("");
const chatListDom = ref();
const roleAlias = {user: "ME", assistant: "ChatGPT", system: "System"};
const messageList = ref([
  {
    role: "system",
    content: "ChatGPT，OpenAI",
  },
  {
    role: "assistant",
    content: `Hello, I am a chatbot to facilitate operations at a trucking company and can help with：

1. Providing data insights on company data requested by the dispatcher.
2. Help truckers when in need of assistance with traffic conditions, weather conditions, tolls, truck information.`,
  },
]);

const parseAndBeautifyJSON = (jsonString) => {
  try {
    let parsedOnce = JSON.parse(jsonString); // This gives you stringified JSON
    let parsedTwice = JSON.parse(parsedOnce); // This gives you the JSON object
    return JSON.stringify(parsedTwice, null, 2);
  } catch (error) {
    return jsonString; // return the original string if it's not valid JSON
  }
};


const sendChatMessage = async (content = messageContent.value) => {
  try {
    isTalking.value = true;
    if (messageList.value.length === 2) {
      messageList.value.pop();
    }
    messageList.value.push({role: "user", content});
    clearMessageContent();
    messageList.value.push({role: "assistant", content: ""});

    const resp = await chat(content);
    if (resp) {
      appendLastMessageContent(resp)
    }
  } catch (error) {
    appendLastMessageContent(error);
  } finally {
    isTalking.value = false;
  }
};

const appendLastMessageContent = (content) =>
    (messageList.value[messageList.value.length - 1].content += content);

const send = () => {
  if (!messageContent.value.length) return;
  sendChatMessage();
};

const clearMessageContent = () => (messageContent.value = "");

const scrollToBottom = () => {
  if (!chatListDom.value) return;
  scrollTo(0, chatListDom.value.scrollHeight);
};

watch(messageList.value, () => nextTick(() => scrollToBottom()));

</script>

<style scoped>
</style>
