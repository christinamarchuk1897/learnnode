<template>
    <div class="form">
        <div v-for="(item, key) in form" :key="key">
            <div class="form-group" v-if="item.type == types.input">
                <label :for="item.id">{{ item.label }}</label>
                <input v-model="formData[item.model]" :type="item.type" class="form-control" :id="item.id" :placeholder="`Enter ${item.label}`">
            </div>
            <div class="form-group" v-if="item.type == types.number">
                <label :for="item.id">{{ item.label }}</label>
                <input v-model="formData[item.model]" :type="item.type" class="form-control" :id="item.id" :placeholder="`Enter ${item.label}`">
            </div>
            <div class="form-group select" v-if="item.type == types.select">
                <label :for="item.id">{{ item.label }}</label>
                <select v-model="formData[item.model]" class="custom-select" :id="item.id">
                    <option :value="i" v-for="(opt, i) in item.options" :key="i">{{opt}}</option>
                </select>
            </div>
        </div>
        <button @click="create">Create</button>
    </div>
</template>
<script>
const TYPE_INPUT = 'input';
export default {
    data() {
        return {
            types: {
                input: 'input',
                select: 'select',
                number: 'number'
            },

            formData: {

            }
        }
    },

    props: {
        form: {
            type: Array,
            default: () => []
        }
    },
    async mounted() {
        await this.form.map((el)=> {
            this.formData[el.model] = ''
        });
    },
    methods: {
        create() {
            this.$emit('formData', this.formData)
        }
    }
}
</script>