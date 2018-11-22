<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="4">
                <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">

                    <el-form-item label="医院ID" prop="hospitalId">
                        <el-input v-model="formData.hospitalId"></el-input>
                    </el-form-item>

                    <el-form-item label="医院科室ID" prop="hospitalDeptId">
                        <el-input v-model="formData.hospitalDeptId"></el-input>
                    </el-form-item>

                    <el-form-item label="医生名称" prop="doctorName">
                        <el-input v-model="formData.doctorName"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-select v-model="sexValue" placeholder="请选择">
                            <el-option
                                v-for="item in sexOptions"
                                :key="item.sexValue"
                                :label="item.label"
                                :value="item.sexValue">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="婚姻情况">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in marriageOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="出生日期">
                        <el-date-picker
                            v-model="birthday"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="行政区代码" prop="pcaCode">
                        <el-input v-model="formData.pcaCode"></el-input>
                    </el-form-item>

                    <el-form-item label="详细地址" prop="address">
                        <el-input v-model="formData.address"></el-input>
                    </el-form-item>

                    <el-form-item label="邮政编码" prop="postCode">
                        <el-input v-model="formData.postCode"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号码" prop="mobile">
                        <el-input v-model="formData.mobile"></el-input>
                    </el-form-item>

                    <el-form-item label="简介" prop="intro">
                        <el-input v-model="formData.intro"></el-input>
                    </el-form-item>


                    <el-form-item label="是否专家">
                        <el-select v-model="isExpertValue" placeholder="请选择">
                            <el-option
                                v-for="item in isExpertOptions"
                                :key="item.isExpertValue"
                                :label="item.label"
                                :value="item.isExpertValue">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="特长" prop="specialty">
                        <el-input v-model="formData.specialty"></el-input>
                    </el-form-item>

                    <el-form-item label="区域编码" prop="areaCode">
                        <el-input v-model="formData.areaCode"></el-input>
                    </el-form-item>

                    <el-form-item label="学历" prop="education">
                        <el-input v-model="formData.education"></el-input>
                    </el-form-item>

                    <el-form-item label="职称" prop="title">
                        <el-input v-model="formData.title"></el-input>
                    </el-form-item>

                    <el-form-item label="社会机构及职务" prop="duties">
                        <el-input v-model="formData.duties"></el-input>
                    </el-form-item>

                    <el-form-item label="机构编码" prop="orgCode">
                        <el-input v-model="formData.orgCode"></el-input>
                    </el-form-item>

                    <el-form-item label="证件类型" prop="idType">
                        <el-input v-model="formData.idType"></el-input>
                    </el-form-item>

                    <el-form-item label="证件号码" prop="idNumber">
                        <el-input v-model="formData.idNumber"></el-input>
                    </el-form-item>

                    <el-form-item label="证书编号" prop="certificateNo">
                        <el-input v-model="formData.certificateNo"></el-input>
                    </el-form-item>

                    <el-form-item label="证件图片" prop="idUrl">
                        <el-input v-model="formData.idUrl"></el-input>
                    </el-form-item>

                    <el-form-item label="认证状态">
                        <el-select v-model="checkStateValue" placeholder="请选择">
                            <el-option
                                v-for="item in checkStateOptions"
                                :key="item.checkStateValue"
                                :label="item.label"
                                :value="item.checkStateValue">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="签名图片URL" prop="signatureUrl">
                        <el-input v-model="formData.signatureUrl"></el-input>
                    </el-form-item>

                    <el-form-item label="上传手持证件图片" label-width="180px">
                        <el-upload
                            class="avatar-uploader"
                            :action="baseUrl + '/v1/addimg/shop'"
                            :show-file-list="false"
                            :on-success="handleShopAvatarScucess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="上传医师执业证书图片" label-width="180px">
                        <el-upload
                            class="avatar-uploader"
                            :action="baseUrl + '/v1/addimg/shop'"
                            :show-file-list="false"
                            :on-success="handleShopAvatarScucess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="上传医生图像图片" label-width="180px">
                        <el-upload
                            class="avatar-uploader"
                            :action="baseUrl + '/v1/addimg/shop'"
                            :show-file-list="false"
                            :on-success="handleShopAvatarScucess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="formData.image_path" :src="baseImgPath + formData.image_path" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="BJCA医生唯一标识" prop="idUrl" label-width="180px" >
                        <el-input v-model="formData.idUrl"></el-input>
                    </el-form-item>

                    <el-form-item label="身高" prop="height">
                        <el-input v-model="formData.height"></el-input>
                    </el-form-item>

                    <el-form-item label="体重" prop="weight">
                        <el-input v-model="formData.height"></el-input>
                    </el-form-item>

                    <el-form-item label="BPM指数" prop="bpm">
                        <el-input v-model="formData.bpm"></el-input>
                    </el-form-item>

                    <el-form-item label="挂号金额" prop="guoHaoMoney">
                        <el-input v-model="formData.guoHaoMoney"></el-input>
                    </el-form-item>

                    <el-form-item label="备注" prop="description">
                        <el-input v-model="formData.description"></el-input>
                    </el-form-item>

                    <el-form-item class="button_submit">
                        <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import {cityGuess, addShop, searchplace, foodCategory} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'

    export default {
        data() {
            return {
                city: {},
                formData: {
                    hospitalId: 1,          //    医院ID
                    hospitalDeptId: 1,  //     医院科室ID
                    userId: 1,              //      用户ID
                    doctorName: '',     //     医生名称
                    pcaCode: '',           //     行政区代码
                    address: '',           //     地址
                    postCode: '',          //    邮政编码
                    mobile: '',                //   手机号码
                    intro: '',                //    简介
                    specialty: '',            //    特长
                    areaCode: '',         //    区域编码
                    education: '',           //    学历
                    title: '',                   //    职称
                    duties: '',                  // 社会机构及职务
                    orgCode: '',                 // 机构编码
                    idType: '',                     //证件类型
                    idNumber: '',                //证件号码
                    certificateNo: '',           // 证书编号
                    idUrl: '',                           //证件图片
                    checkState: '',//认证状态（0-未认证、1-已通过、2-未通过、3-驳回）
                    signatureUrl: '',// 签名图片URL
                    handheldIdUrl: '',//手持证件图片
                    certificateUrl: '',//医师执业证书图片
                    imageUrl: '', // 医生图像图片
                    openId: '', // BJCA医生唯一标识
                    height: '', // 身高
                    weight: '',// 体重
                    bpm: '', // BPM指数
                    guoHaoMoney: '', //挂号金额
                    description: '',//备注
                },
                rules: {
                    name: [
                        {required: true, message: '请输入店铺名称', trigger: 'blur'},
                    ],
                    address: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '请输入联系电话'},
                        {type: 'number', message: '电话号码必须是数字'}
                    ],
                },
                baseUrl,
                baseImgPath,
                sexOptions: [{
                    sexValue: 'man',
                    label: '男性'
                }, {
                    sexValue: 'grild',
                    label: '女性'
                }],
                sexValue: '',
                marriageOptions: [{
                    value: '0',
                    label: '未婚'
                }, {
                    value: '1',
                    label: '已婚'
                }],
                value: '',

                isExpertOptions: [{
                    isExpertValue: '0',
                    label: '是'
                }, {
                    isExpertValue: '1',
                    label: '否'
                }],
                isExpertValue: '',
                checkStateOptions: [{
                    checkStateValue: 0,
                    label: '未认证'
                }, {
                    checkStateValue: 1,
                    label: '已通过'
                },{
                    checkStateValue: 2,
                    label: '未通过'
                },{
                    checkStateValue: 3,
                    label: '驳回'
                }],
                checkStateValue: '',
                birthday: '',
            }
        },
        components: {
            headTop,
        },
        mounted() {
            this.initData();
        },
        methods: {
            async initData() {
            },

            handleShopAvatarScucess(res, file) {
                if (res.status == 1) {
                    this.formData.image_path = res.image_path;
                } else {
                    this.$message.error('上传图片失败！');
                }
            },
            handleBusinessAvatarScucess(res, file) {
                if (res.status == 1) {
                    this.formData.business_license_image = res.image_path;
                } else {
                    this.$message.error('上传图片失败！');
                }
            },
            handleServiceAvatarScucess(res, file) {
                if (res.status == 1) {
                    this.formData.catering_service_license_image = res.image_path;
                } else {
                    this.$message.error('上传图片失败！');
                }
            },
            beforeAvatarUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info-row';
                } else if (index === 3) {
                    return 'positive-row';
                }
                return '';
            },
            selectActivity() {
                this.$prompt('请输入活动详情', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {
                    if (value == null) {
                        this.$message({
                            type: 'info',
                            message: '请输入活动详情'
                        });
                        return
                    }
                    let newObj = {};
                    switch (this.activityValue) {
                        case '满减优惠':
                            newObj = {
                                icon_name: '减',
                                name: '满减优惠',
                                description: value,
                            }
                            break;
                        case '优惠大酬宾':
                            newObj = {
                                icon_name: '特',
                                name: '优惠大酬宾',
                                description: value,
                            }
                            break;
                        case '新用户立减':
                            newObj = {
                                icon_name: '新',
                                name: '新用户立减',
                                description: value,
                            }
                            break;
                        case '进店领券':
                            newObj = {
                                icon_name: '领',
                                name: '进店领券',
                                description: value,
                            }
                            break;
                    }
                    this.activities.push(newObj);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleDelete(index) {
                this.activities.splice(index, 1)
            },
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        Object.assign(this.formData, {activities: this.activities}, {
                            category: this.selectedCategory.join('/')
                        })
                        try {
                            let result = await addShop(this.formData);
                            if (result.status == 1) {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功'
                                });
                                this.formData = {
                                    name: '', //店铺名称
                                    address: '', //地址
                                    latitude: '',
                                    longitude: '',
                                    description: '', //介绍
                                    phone: '',
                                    promotion_info: '',
                                    float_delivery_fee: 5, //运费
                                    float_minimum_order_amount: 20, //起价
                                    is_premium: true,
                                    delivery_mode: true,
                                    new: true,
                                    bao: true,
                                    zhun: true,
                                    piao: true,
                                    startTime: '',
                                    endTime: '',
                                    image_path: '',
                                    business_license_image: '',
                                    catering_service_license_image: '',
                                };
                                this.selectedCategory = ['快餐便当', '简餐'];
                                this.activities = [{
                                    icon_name: '减',
                                    name: '满减优惠',
                                    description: '满30减5，满60减8',
                                }];
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: result.message
                                });
                            }
                            console.log(result)
                        } catch (err) {
                            console.log(err)
                        }
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请检查输入是否正确',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .button_submit {
        text-align: center;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }

    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }

    .el-table .info-row {
        background: #c9e5f5;
    }

    .el-table .positive-row {
        background: #e2f0e4;
    }
</style>
