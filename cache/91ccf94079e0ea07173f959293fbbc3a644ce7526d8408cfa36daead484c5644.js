{"source":"(window.webpackJsonp = window.webpackJsonp || []).push([ [ \"home\" ], {\n    /***/ IULK: \n    /***/ function(t, n, e) {\n        // extracted by mini-css-extract-plugin\n        /***/},\n    /***/ d7gD: \n    /***/ function(t, n, e) {\n        \"use strict\";\n        e.r(n);\n        // CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./src/views/home/home.vue?vue&type=template&id=a898df9e&scoped=true&\n        var o = {\n            props: {\n                name: {\n                    type: String,\n                    default: function() {\n                        return \"penglin\";\n                    }\n                }\n            },\n            methods: {\n                callback: function() {\n                    this.name = \"我是通过直接修改prop改变的\";\n                }\n            },\n            created: function() {},\n            mounted: function() {\n                this.$root.$on(\"pk\", function(t) {});\n            }\n        }, i = e(\"ToIM\"), s = Object(i.a)(o, function() {\n            var t = this, n = t.$createElement, e = t._self._c || n;\n            return e(\"div\", [ t._v(\"\\n  我是一个组件我的名字是:\" + t._s(t.name) + \"\\n  \"), e(\"div\", [ e(\"button\", {\n                attrs: {\n                    type: \"button\"\n                },\n                on: {\n                    click: t.callback\n                }\n            }, [ t._v(\"我还是一个按钮\") ]) ]) ]);\n        }, [], !1, null, null, null)\n        /* harmony default export */ .exports, u = {\n            model: {\n                prop: \"checkeds\",\n                event: \"change\"\n            },\n            props: {\n                checkeds: Boolean\n            },\n            data: function() {\n                return {\n                    age: 30\n                };\n            }\n        }, a = {\n            model: {\n                prop: \"value1\"\n            },\n            props: [ \"value1\" ],\n            computed: {\n                inputListeners: function() {\n                    var t = this;\n                    return Object.assign({}, this.$listeners, {\n                        input: function() {\n                            t.$emit(\"input\", event.target.value);\n                        }\n                    });\n                }\n            },\n            created: function() {}\n        }, c = {\n            props: [ \"show\" ],\n            watch: {\n                show: function() {\n                    this.$emit(\"update:show\", this.show);\n                }\n            },\n            mounted: function() {},\n            methods: {\n                cx: function() {\n                    this.show = !1, this.$root.$emit(\"pk\", \"hi\");\n                }\n            }\n        }, l = {\n            data: function() {\n                return {\n                    name: \"xinxin\",\n                    lovingVue: !0,\n                    show: !1,\n                    childrens: \"\",\n                    onmsg: \"\",\n                    inputsValue: \"inputsValue\"\n                };\n            },\n            components: {\n                list: s,\n                baseCheckbox: Object(i.a)(u, function() {\n                    var n = this, t = n.$createElement, e = n._self._c || t;\n                    return e(\"div\", [ e(\"input\", {\n                        attrs: {\n                            type: \"checkbox\"\n                        },\n                        domProps: {\n                            checked: n.checkeds\n                        },\n                        on: {\n                            change: function(t) {\n                                return n.$emit(\"change\", t.target.checked);\n                            }\n                        }\n                    }) ]);\n                }, [], !1, null, null, null)\n                /* harmony default export */ .exports,\n                inputs: Object(i.a)(a, function() {\n                    var t = this, n = t.$createElement, e = t._self._c || n;\n                    return e(\"div\", [ e(\"input\", t._g(t._b({\n                        attrs: {\n                            type: \"text\"\n                        },\n                        domProps: {\n                            value: t.value1\n                        }\n                    }, \"input\", t.$attrs, !1), t.inputListeners)), t._v(\" \"), e(\"div\", [ t._v(\"父组件中inputsValue：\" + t._s(t.$parent.inputsValue)) ]) ]);\n                }, [], !1, null, null, null)\n                /* harmony default export */ .exports,\n                dia: Object(i.a)(c, function() {\n                    var n = this, t = n.$createElement, e = n._self._c || t;\n                    return e(\"el-dialog\", {\n                        attrs: {\n                            title: \"提示\",\n                            visible: n.show,\n                            width: \"30%\"\n                        },\n                        on: {\n                            \"update:visible\": function(t) {\n                                n.show = t;\n                            }\n                        }\n                    }, [ e(\"span\", [ n._v(\"这是一段信息\") ]), n._v(\" \"), e(\"span\", {\n                        staticClass: \"dialog-footer\",\n                        attrs: {\n                            slot: \"footer\"\n                        },\n                        slot: \"footer\"\n                    }, [ e(\"el-button\", {\n                        on: {\n                            click: function(t) {\n                                n.show = !1;\n                            }\n                        }\n                    }, [ n._v(\"取 消\") ]), n._v(\" \"), e(\"el-button\", {\n                        attrs: {\n                            type: \"primary\"\n                        },\n                        on: {\n                            click: n.cx\n                        }\n                    }, [ n._v(\"确 定\") ]) ], 1) ]);\n                }, [], !1, null, null, null)\n                /* harmony default export */ .exports\n            },\n            created: function() {},\n            methods: {\n                callback: function() {\n                    this.name = \"我是通过事件改变的\";\n                },\n                inputsfunc: function() {},\n                focusfunc: function() {\n                    this.inputsValue = \"\";\n                }\n            },\n            mounted: function() {\n                var n = this;\n                this.childrens = this.$refs.basecheck.age, this.$on(\"test\", function(t) {\n                    n.onmsg = t;\n                });\n            }\n        }, r = (e(\"fjoG\"), Object(i.a)(l, function() {\n            var n = this, t = n.$createElement, e = n._self._c || t;\n            return e(\"div\", {\n                staticClass: \"home\"\n            }, [ e(\"h1\", [ n._v(\"Webpack4.30.0 For VUE templete\") ]), n._v(\" \"), e(\"router-link\", {\n                attrs: {\n                    to: {\n                        name: \"info\"\n                    }\n                }\n            }, [ n._v(\"\\n    详情\\n  \") ]), n._v(\" \"), e(\"router-link\", {\n                attrs: {\n                    to: {\n                        name: \"h5\"\n                    }\n                }\n            }, [ n._v(\"\\n    H5\\n  \") ]), n._v(\" \"), e(\"div\", [ e(\"el-button\", {\n                attrs: {\n                    type: \"primary\"\n                },\n                on: {\n                    click: function(t) {\n                        n.show = !0;\n                    }\n                }\n            }, [ n._v(\"\\n      弹框\\n    \") ]) ], 1), n._v(\" \"), e(\"div\", [ n._v(\"name: \" + n._s(n.name)) ]), n._v(\" \"), e(\"div\", [ n._v(\"lovingVue: \" + n._s(n.lovingVue)) ]), n._v(\" \"), e(\"div\", [ n._v(\"子组件中的年龄是：\" + n._s(n.childrens)) ]), n._v(\" \"), e(\"div\", [ n._v(\"输入框：\" + n._s(n.inputsValue)) ]), n._v(\" \"), e(\"div\", [ n._v(\"自定义事件：\" + n._s(n.onmsg)) ]), n._v(\" \"), e(\"list\", {\n                attrs: {\n                    name: n.name\n                },\n                on: {\n                    \"update:name\": function(t) {\n                        n.name = t;\n                    },\n                    callback: n.callback\n                }\n            }), n._v(\" \"), e(\"base-checkbox\", {\n                ref: \"basecheck\",\n                model: {\n                    value: n.lovingVue,\n                    callback: function(t) {\n                        n.lovingVue = t;\n                    },\n                    expression: \"lovingVue\"\n                }\n            }), n._v(\" \"), e(\"inputs\", {\n                attrs: {\n                    \"data-a\": \"penglin\",\n                    placeholder: \"你好呀\"\n                },\n                on: {\n                    input: n.inputsfunc,\n                    focus: n.focusfunc\n                },\n                model: {\n                    value: n.inputsValue,\n                    callback: function(t) {\n                        n.inputsValue = t;\n                    },\n                    expression: \"inputsValue\"\n                }\n            }), n._v(\" \"), e(\"dia\", {\n                attrs: {\n                    show: n.show\n                },\n                on: {\n                    \"update:show\": function(t) {\n                        n.show = t;\n                    }\n                }\n            }) ], 1);\n        }, [], !1, null, \"a898df9e\", null)\n        /* harmony default export */);\n        n.default = r.exports;\n    },\n    /***/ fjoG: \n    /***/ function(t, n, e) {\n        \"use strict\";\n        /* harmony import */        var o = e(\"IULK\");\n        /* harmony import */        /* */ e.n(o).a;\n    }\n} ]);"}