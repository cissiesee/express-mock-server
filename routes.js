module.exports = function(app) {
	app.use('/', require('./routes/index'));
	app.use('/', require('./routes/users'));
	app.use('/', require('./routes/loginstatus'));
	app.use('/', require('./routes/getProperty'));

	/* 个人资料修改 */
	app.use('/', require('./routes/GetGstInfo'));//获取用户信息
	app.use('/', require('./routes/UpdGstInfo'));//更新用户信息

	/* 第三方银行签约 */
	app.use('/', require('./routes/addBankCard'));//新增第三方银行可签约
	app.use('/', require('./routes/BankCardSign'));//用户已签约的第三方银行卡
	app.use('/', require('./routes/getBankList'));//获取第三方银行列表

	/* 股东账户加挂 */
	app.use('/', require('./routes/shAcctLst'));//查询未加挂的股东账户
	app.use('/', require('./routes/sHolderPlus'));//批量加挂股东卡
	app.use('/', require('./routes/sHolderSearch'));//查询已加挂账户信息

	/* 修改密码 */
	app.use('/', require('./routes/updateTrdPwd')); //交易密码
	app.use('/', require('./routes/updateFundPwd'));//资金密码

	/* 风险测评 */
	app.use('/', require('./routes/FetchRiskTstSbj'));//获取风险评测题目
	app.use('/', require('./routes/RiskTstRlt'));//获取风险评测结果
	app.use('/', require('./routes/updRiskQues'));//更新风险评测结果

	/* 电子签名约定书 */
	app.use('/', require('./routes/signCustCN'));//客户电子签名约定书——签约
	app.use('/', require('./routes/getcustCN'));//客户电子签名约定书查询

	/* 开通警示股票 */
	app.use('/', require('./routes/addCustProto'));
	/* 警示股票开通判定 */
	app.use('/', require('./routes/jsgpOpen'));

	/* 开通报价回购 */
	app.use('/', require('./routes/qulifyApply'));
	/* 报价回购开通判定 */
	app.use('/', require('./routes/bjhgOpen'));

	/* 获取深港通/沪港通 知识测试题目 */
	app.use('/', require('./routes/testSubjectQry'));
	/* 深港通/沪港通 知识测试 结果提交 */
	app.use('/', require('./routes/testSubjectCommit'));
	/* 开通深港通/沪港通 */
	app.use('/', require('./routes/proMaintain'));
	/* 开通深港通/沪港通 开通权限资格验证*/
	app.use('/', require('./routes/fundOpen'));

	/* 基金开户 */
	app.use('/', require('./routes/getFundActList'));//基金公司查询
	app.use('/', require('./routes/getUserInfo'));//用户/机构信息查询
	app.use('/', require('./routes/getOrgUserInfo'));//用户/机构信息查询
	app.use('/', require('./routes/openFundAct'));//基金开户

	/* 获取验证码 */
	app.use('/', require('./routes/getcode'));//基金公司查询

	/* 创业板转签 */
	app.use('/', require('./routes/cybzqOpen'));//创业板转签开通判定
	app.use('/', require('./routes/gemTransferInit'));//创业板转签初始化
	app.use('/', require('./routes/gemTransferCfm'));//创业板转签确认



};
