const _0x47c66a=_0x2085;function _0x2085(_0x146936,_0x38770b){const _0xb6aa77=_0xb6aa();return _0x2085=function(_0x2085d5,_0x9e4a4b){_0x2085d5=_0x2085d5-0xc8;let _0xb8661e=_0xb6aa77[_0x2085d5];return _0xb8661e;},_0x2085(_0x146936,_0x38770b);}function _0xb6aa(){const _0x467fbd=['utf8','6207443RBiDam','<@!','./config.yml','720vdzZbn','79nzywNz','Closed\x20automatically\x20after\x20time\x20has\x20passed\x20with\x20no\x20response\x20(Alert\x20command)','65180WsScsN','392VRFgDr','addComponents','then','log','findOne','\x1b[33m%s\x1b[0m','Locale','error','now','7838jPuywm','View\x20Ticket','TicketAlert','setURL','EmbedBuilder','230361WLRLfn','closeTicket','lastMessageSent','setLabel',':R>','alert','floor','ButtonBuilder','3844752wWRwya','Link','checkIfUserHasSupportRoles','reply','../../utils.js','EmbedColors','284VPOHpx','5830GcsjSJ','Error\x20updating\x20ticket:','send','[INFO]\x20I\x20tried\x20to\x20DM\x20a\x20user,\x20but\x20their\x20DM\x27s\x20are\x20locked.','Alert','27680DhJqWr','guild','name','exports','user','NoPermsMessage','NotInTicketChannel','replace','../../models/ticketModel','channel','https://discord.com/channels/'];_0xb6aa=function(){return _0x467fbd;};return _0xb6aa();}(function(_0x5b1584,_0x5d53be){const _0x3c15b1=_0x2085,_0x5d13a2=_0x5b1584();while(!![]){try{const _0x14fd57=parseInt(_0x3c15b1(0xc9))/0x1*(-parseInt(_0x3c15b1(0xd5))/0x2)+-parseInt(_0x3c15b1(0xda))/0x3+-parseInt(_0x3c15b1(0xe8))/0x4*(-parseInt(_0x3c15b1(0xe9))/0x5)+-parseInt(_0x3c15b1(0xe2))/0x6+parseInt(_0x3c15b1(0xcc))/0x7*(parseInt(_0x3c15b1(0xee))/0x8)+parseInt(_0x3c15b1(0xc8))/0x9*(parseInt(_0x3c15b1(0xcb))/0xa)+parseInt(_0x3c15b1(0xfa))/0xb;if(_0x14fd57===_0x5d53be)break;else _0x5d13a2['push'](_0x5d13a2['shift']());}catch(_0x481496){_0x5d13a2['push'](_0x5d13a2['shift']());}}}(_0xb6aa,0x51d0f));const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync'](_0x47c66a(0xfc),_0x47c66a(0xf9))),commands=yaml['load'](fs['readFileSync']('./commands.yml','utf8')),utils=require(_0x47c66a(0xe6)),ms=require('ms'),ticketModel=require(_0x47c66a(0xf6));module[_0x47c66a(0xf1)]={'enabled':commands['Ticket'][_0x47c66a(0xed)]['Enabled'],'data':new SlashCommandBuilder()['setName'](_0x47c66a(0xdf))['setDescription'](commands['Ticket']['Alert']['Description']),async 'execute'(_0x5c9e1e,_0x42ba58){const _0x10ee70=_0x47c66a,_0x90afe4=await ticketModel[_0x10ee70(0xd0)]({'channelID':_0x5c9e1e['channel']['id']});if(!_0x90afe4)return _0x5c9e1e[_0x10ee70(0xe5)]({'content':config[_0x10ee70(0xd2)][_0x10ee70(0xf4)],'ephemeral':!![]});if(config['TicketAlert']['Enabled']===![])return _0x5c9e1e['reply']({'content':'This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','ephemeral':!![]});let _0x836ca1=await utils[_0x10ee70(0xe4)](_0x5c9e1e);if(!_0x836ca1)return _0x5c9e1e['reply']({'content':config['Locale'][_0x10ee70(0xf3)],'ephemeral':!![]});await _0x5c9e1e['deferReply']();let _0x16ad4e=await _0x42ba58['users']['cache']['get'](_0x90afe4['userID']);function _0xdc6679(_0x23bb33){const _0x1ea952=Math['floor'](_0x23bb33/0x3e8),_0x5d1d68=Math['floor'](_0x1ea952/(0x18*0xe10)),_0x2afc9=Math['floor'](_0x1ea952%(0x18*0xe10)/0xe10),_0x525bad=Math['floor'](_0x1ea952%0xe10/0x3c),_0x472b50=[];if(_0x5d1d68>0x0)_0x472b50['push'](_0x5d1d68+'\x20day'+(_0x5d1d68>0x1?'s':''));if(_0x2afc9>0x0)_0x472b50['push'](_0x2afc9+'\x20hour'+(_0x2afc9>0x1?'s':''));if(_0x525bad>0x0)_0x472b50['push'](_0x525bad+'\x20minute'+(_0x525bad>0x1?'s':''));return _0x472b50['join'](',\x20');}const _0x5e73aa=_0x90afe4['lastMessageSent']?new Date(_0x90afe4[_0x10ee70(0xdc)]):new Date(_0x90afe4['ticketCreationDate']),_0x308729=new Date(),_0x431f46=_0xdc6679(_0x308729-_0x5e73aa),_0x6028e4=new Discord['ButtonBuilder']()['setCustomId'](_0x10ee70(0xdb))['setLabel'](config[_0x10ee70(0xd2)]['CloseTicketButton'])['setStyle'](config['ButtonColors'][_0x10ee70(0xdb)])['setEmoji'](config['ButtonEmojis'][_0x10ee70(0xdb)]);let _0x158406=new Discord['ActionRowBuilder']()['addComponents'](_0x6028e4);const _0x5097f0=new Discord[(_0x10ee70(0xe1))]()[_0x10ee70(0xdd)](_0x10ee70(0xd6))['setStyle'](_0x10ee70(0xe3))[_0x10ee70(0xd8)](_0x10ee70(0xf8)+_0x5c9e1e['guild']['id']+'/'+_0x5c9e1e['channel']['id']);let _0x183d1e=new Discord['ActionRowBuilder']()[_0x10ee70(0xcd)](_0x5097f0);const _0x1cb3c3=Math['floor'](ms(config['TicketAlert']['Time'])/0x3e8),_0x3eabbe=Math[_0x10ee70(0xe0)](Date[_0x10ee70(0xd4)]()/0x3e8)+_0x1cb3c3;let _0x4d0445=config['TicketAlert']['Message']['replace'](/{time}/g,'<t:'+_0x3eabbe+_0x10ee70(0xde))[_0x10ee70(0xf5)](/{inactive-time}/g,_0x431f46);;const _0x4794a6=new Discord['EmbedBuilder']()['setColor'](config[_0x10ee70(0xe7)])['setDescription'](_0x4d0445)['setTimestamp']();let _0x1d6bd4=config[_0x10ee70(0xd7)]['DMMessage']['replace'](/{time}/g,'<t:'+_0x3eabbe+_0x10ee70(0xde))[_0x10ee70(0xf5)](/{server}/g,''+_0x5c9e1e[_0x10ee70(0xef)][_0x10ee70(0xf0)])[_0x10ee70(0xf5)](/{inactive-time}/g,_0x431f46);;const _0x16843b=new Discord[(_0x10ee70(0xd9))]()['setColor'](config['EmbedColors'])['setDescription'](_0x1d6bd4)['setTimestamp']();if(config['TicketAlert']['DMUser'])try{await _0x16ad4e[_0x10ee70(0xeb)]({'embeds':[_0x16843b],'components':[_0x183d1e]});}catch(_0x2ed556){console[_0x10ee70(0xcf)](_0x10ee70(0xd1),_0x10ee70(0xec));let _0x150991='\x0a\x0a['+new Date()['toLocaleString']()+']\x20[ERROR]\x20'+_0x2ed556['stack'];await fs['appendFile']('./logs.txt',_0x150991,_0x54041f=>{if(_0x54041f)console['log'](_0x54041f);});}_0x5c9e1e['editReply']({'content':_0x10ee70(0xfb)+_0x16ad4e['id']+'>','embeds':[_0x4794a6],'components':[_0x158406],'fetchReply':!![]})[_0x10ee70(0xce)](async function(_0x393687){const _0x31be4c=_0x10ee70;try{const _0x28f648={'channelID':_0x5c9e1e[_0x31be4c(0xf7)]['id']},_0x1c5680={'closeNotificationTime':Date['now'](),'closeNotificationMsgID':_0x393687['id'],'closeNotificationUserID':_0x5c9e1e['user']['id'],'channelID':_0x5c9e1e['channel']['id'],'closeUserID':_0x5c9e1e[_0x31be4c(0xf2)]['id'],'closeReason':_0x31be4c(0xca)},_0x396b67={'upsert':!![],'new':!![],'setDefaultsOnInsert':!![]};await ticketModel['findOneAndUpdate'](_0x28f648,_0x1c5680,_0x396b67);}catch(_0xeb40dc){console[_0x31be4c(0xd3)](_0x31be4c(0xea),_0xeb40dc);}});}};