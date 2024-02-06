import { SSTConfig } from "sst"
import { API } from "./stacks/MyStack"
import { Bucket } from "sst/constructs"
import { stack } from "sst/constructs/FunctionalStack"
import { NextjsSite } from "sst/constructs"

const bucket = new Bucket(stack, "public")

const site = new NextjsSite(stack, "site", {
  bind: [bucket],
})

export default {
  config(_input) {
    return {
      name: "todo",
      region: "us-east-1",
    }
  },
  stacks(app) {
    app.stack(API)
  },
} satisfies SSTConfig
