import { mount } from "@vue/test-utils";
import { expect, test } from 'vitest'
import Login from "../../src/views/Login.vue";
// import { expect, test } from "vitest";
const wrapper = mount(Login);

test('button disabled', async () => {
    const wrapper = mount(Login)
    const errorPassword = wrapper.find('#error-password').text();
    const errorUsername = wrapper.find('#error-username').text();
    if(errorPassword || errorUsername) {
       expect(wrapper.find('[disabled="true"]').exists()).toBe(true);
    }
})

test('show/hide password', async () => {
    const wrapper = mount(Login)
    await wrapper.find('#hide-show-password').trigger('click')
    if(wrapper.find('#password').find('[type="text"]')) {
        expect(wrapper.find('#hide-password').exists()).toBe(true);
    }
    await wrapper.find('#hide-show-password').trigger('click')
    if(wrapper.find('#password').find('[type="password"]')) {
        expect(wrapper.find('#show-password').exists()).toBe(true);
    }
})
