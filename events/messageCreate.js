function _0x49f0(_0x56e739,_0x5d0d81){const _0x54ab9f=_0x54ab();return _0x49f0=function(_0x49f046,_0x506f27){_0x49f046=_0x49f046-0x16d;let _0x8e3538=_0x54ab9f[_0x49f046];return _0x8e3538;},_0x49f0(_0x56e739,_0x5d0d81);}const _0x569c48=_0x49f0;(function(_0x5ae278,_0x21173a){const _0x2e0a1d=_0x49f0,_0x492927=_0x5ae278();while(!![]){try{const _0x6b7e9=-parseInt(_0x2e0a1d(0x1ab))/0x1*(parseInt(_0x2e0a1d(0x197))/0x2)+-parseInt(_0x2e0a1d(0x1a3))/0x3*(parseInt(_0x2e0a1d(0x1b4))/0x4)+parseInt(_0x2e0a1d(0x17c))/0x5*(-parseInt(_0x2e0a1d(0x195))/0x6)+-parseInt(_0x2e0a1d(0x18e))/0x7+-parseInt(_0x2e0a1d(0x177))/0x8*(parseInt(_0x2e0a1d(0x1be))/0x9)+parseInt(_0x2e0a1d(0x17b))/0xa+parseInt(_0x2e0a1d(0x1a5))/0xb*(parseInt(_0x2e0a1d(0x18d))/0xc);if(_0x6b7e9===_0x21173a)break;else _0x492927['push'](_0x492927['shift']());}catch(_0x5f1ee3){_0x492927['push'](_0x492927['shift']());}}}(_0x54ab,0xce9ab));function _0x54ab(){const _0x156081=['log','114012pRfgzo',']\x20[CUSTOM\x20COMMAND]\x20Command:\x20','124462Enbatg','messages','command','gLHAK','toLowerCase','utf8','error','.\x20Expected\x20\x22EMBED\x22\x20or\x20\x22TEXT\x22.','setColor',',\x20User:\x20','[INFO]\x20Response\x20configuration\x20missing\x20for\x20key:\x20','deleteMsg','218067aTGfcz','send','1100JEhNHR','\x0a\x0a[','username','string-similarity','exports','load','3gekNNg','uvfuF','gjWzU','Embed','yellow','>,\x20','LogCommands','channel','EMBED','8ixJIGL','findOneAndUpdate','content','setDescription','TEXT','bestMatch','findOne','readFileSync','keys','AutoResponse','9KJUHek','Error\x20deleting\x20message:','split','response','delete','toLocaleString','fetch','LMUdR','appendFile','target','length','Mpvea','13185640NzcPpv','now','checkIfUserHasSupportRoles','Enabled','10712440twNVjh','55ieKFlR','[INFO]\x20Invalid\x20response\x20type\x20for\x20key:\x20','setFooter','OnlyInTickets','displayAvatarURL','bot','mYcJZ','author','CommandsPrefix','[CUSTOM\x20COMMAND]\x20','jkfHt','EmbedColors','replyToUser','\x20used\x20','reply','./logs.txt','guild','397968xIYdNc','9464665lfOpvy','forEach','cyan','rFRTk','closeNotificationMsgID','Responses'];_0x54ab=function(){return _0x156081;};return _0x54ab();}const {Discord,EmbedBuilder}=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml[_0x569c48(0x1aa)](fs[_0x569c48(0x1bb)]('./config.yml',_0x569c48(0x19c))),color=require('ansi-colors'),utils=require('../utils.js'),ticketModel=require('../models/ticketModel'),guildModel=require('../models/guildModel');module[_0x569c48(0x1a9)]=async(_0x326ee1,_0x1eeb88)=>{const _0x27ebd8=_0x569c48;if(!_0x1eeb88['channel']['type']===0x0)return;const _0x1253a0=await ticketModel[_0x27ebd8(0x1ba)]({'channelID':_0x1eeb88[_0x27ebd8(0x1b2)]['id']});if(_0x1eeb88['author'][_0x27ebd8(0x181)])return;config['CommandsEnabled']&&config['CustomCommands'][_0x27ebd8(0x18f)](_0x260233=>{const _0xe83bc3=_0x27ebd8;let _0x132d47=_0x1eeb88['content'][_0xe83bc3(0x16d)]('\x20'),_0x1a1e06=_0x132d47[0x0]['toLowerCase']();_0x132d47['slice'](0x1);let _0x521970=_0x1a1e06['slice'](config[_0xe83bc3(0x184)]['length']);if(_0x1eeb88['content']['startsWith'](config['CommandsPrefix'])&&_0x521970===_0x260233['command']){if(config[_0xe83bc3(0x17f)]&&!_0x1253a0)return;let _0x3207cc=_0xe83bc3(0x1a6)+new Date()[_0xe83bc3(0x170)]()+']\x20[CUSTOM\x20COMMAND]\x20Command:\x20'+_0x260233[_0xe83bc3(0x199)]+',\x20User:\x20'+_0x1eeb88[_0xe83bc3(0x183)]['username'];fs['appendFile'](_0xe83bc3(0x18b),_0x3207cc,_0x436ef9=>{const _0x24467e=_0xe83bc3;if(_0x24467e(0x176)!=='Mpvea')_0x5f1168['CustomCommands'][_0x24467e(0x18f)](_0x1ecd5f=>{const _0x49f5d3=_0x24467e;let _0x3f5fdf=_0x264d7c[_0x49f5d3(0x1b6)]['split']('\x20'),_0x4724d6=_0x3f5fdf[0x0]['toLowerCase']();_0x3f5fdf['slice'](0x1);let _0x54d8ac=_0x4724d6['slice'](_0x120aa6['CommandsPrefix'][_0x49f5d3(0x175)]);if(_0x5ac7a0['content']['startsWith'](_0x1c5917['CommandsPrefix'])&&_0x54d8ac===_0x1ecd5f[_0x49f5d3(0x199)]){if(_0x4138af['OnlyInTickets']&&!_0x247c00)return;let _0x5adb58=_0x49f5d3(0x1a6)+new _0xf6e4f2()['toLocaleString']()+']\x20[CUSTOM\x20COMMAND]\x20Command:\x20'+_0x1ecd5f['command']+_0x49f5d3(0x1a0)+_0x466bf3['author']['username'];_0x13aff8['appendFile'](_0x49f5d3(0x18b),_0x5adb58,_0x7a20e3=>{if(_0x7a20e3)_0x312b8d['log'](_0x7a20e3);});if(_0x49f906['LogCommands'])_0xce9bbb['log'](''+_0x480a0b[_0x49f5d3(0x1af)](_0x49f5d3(0x185)+_0x17e05d['cyan'](''+_0x4b6ab0['author']['username'])+'\x20used\x20'+_0x5cfcd0['cyan'](''+_0x30b71e['CommandsPrefix']+_0x1ecd5f[_0x49f5d3(0x199)])));let _0x550f87=new _0x1f0aad()['setColor'](_0x307f3d[_0x49f5d3(0x187)])[_0x49f5d3(0x1b7)](''+_0x1ecd5f['response']);if(_0x1ecd5f[_0x49f5d3(0x1a2)])_0x13732e(()=>_0x25b081['delete'](),0x64);if(_0x1ecd5f[_0x49f5d3(0x188)]&&_0x1ecd5f['Embed'])_0x3d683a['reply']({'embeds':[_0x550f87]});if(_0x1ecd5f['replyToUser']===![]&&_0x1ecd5f[_0x49f5d3(0x1ae)])_0x3063fa[_0x49f5d3(0x1b2)][_0x49f5d3(0x1a4)]({'embeds':[_0x550f87]});if(_0x1ecd5f[_0x49f5d3(0x188)]&&_0x1ecd5f[_0x49f5d3(0x1ae)]===![])_0x321a43['reply']({'content':''+_0x1ecd5f['response']});if(_0x1ecd5f['replyToUser']===![]&&_0x1ecd5f[_0x49f5d3(0x1ae)]===![])_0x531d91['channel']['send']({'content':''+_0x1ecd5f[_0x49f5d3(0x16e)]});}});else{if(_0x436ef9)console[_0x24467e(0x194)](_0x436ef9);}});if(config['LogCommands'])console['log'](''+color['yellow']('[CUSTOM\x20COMMAND]\x20'+color['cyan'](''+_0x1eeb88[_0xe83bc3(0x183)]['username'])+'\x20used\x20'+color['cyan'](''+config[_0xe83bc3(0x184)]+_0x260233[_0xe83bc3(0x199)])));let _0xbc68bb=new EmbedBuilder()['setColor'](config['EmbedColors'])['setDescription'](''+_0x260233['response']);if(_0x260233[_0xe83bc3(0x1a2)])setTimeout(()=>_0x1eeb88['delete'](),0x64);if(_0x260233['replyToUser']&&_0x260233['Embed'])_0x1eeb88['reply']({'embeds':[_0xbc68bb]});if(_0x260233['replyToUser']===![]&&_0x260233['Embed'])_0x1eeb88['channel']['send']({'embeds':[_0xbc68bb]});if(_0x260233[_0xe83bc3(0x188)]&&_0x260233['Embed']===![])_0x1eeb88['reply']({'content':''+_0x260233[_0xe83bc3(0x16e)]});if(_0x260233['replyToUser']===![]&&_0x260233['Embed']===![])_0x1eeb88[_0xe83bc3(0x1b2)][_0xe83bc3(0x1a4)]({'content':''+_0x260233['response']});}});if(_0x1253a0){if(_0x27ebd8(0x1ad)!=='dTgGU'){if(!_0x1eeb88['author'][_0x27ebd8(0x181)]){let _0x1d92f6=await utils[_0x27ebd8(0x179)](_0x1eeb88);const _0x21f0a5=_0x1d92f6?'user':'staff';_0x1d92f6&&!_0x1253a0['firstStaffResponse']&&await ticketModel['findOneAndUpdate']({'channelID':_0x1eeb88[_0x27ebd8(0x1b2)]['id']},{'$set':{'firstStaffResponse':Date[_0x27ebd8(0x178)]()}}),await ticketModel['findOneAndUpdate']({'channelID':_0x1eeb88['channel']['id']},{'$set':{'lastMessageSent':Date[_0x27ebd8(0x178)](),'waitingReplyFrom':_0x21f0a5},'$inc':{'messages':0x1}},{'new':!![]});}await guildModel[_0x27ebd8(0x1b5)]({'guildID':_0x1eeb88[_0x27ebd8(0x18c)]['id']},{'$inc':{'totalMessages':0x1}});if(config['TicketAlert'][_0x27ebd8(0x17a)]){if('voMcv'==='voMcv'){const _0x2e8744=await ticketModel['find']({'closeNotificationTime':{'$exists':!![],'$ne':null},'channelID':_0x1eeb88['channel']['id']});for(const _0x300b90 of _0x2e8744){if('jXudq'==='jXudq'){if(!_0x300b90)return;if(!_0x300b90['channelID'])return;if(_0x300b90['closeNotificationTime']===0x0)return;_0x300b90['channelID']===_0x1eeb88['channel']['id']&&('zRiFh'!==_0x27ebd8(0x182)?(await ticketModel['findOneAndUpdate']({'channelID':_0x1eeb88['channel']['id']},{'$unset':{'closeReason':0x1},'$set':{'closeNotificationTime':0x0}}),await _0x1eeb88['channel'][_0x27ebd8(0x198)][_0x27ebd8(0x171)](_0x300b90[_0x27ebd8(0x192)])['then'](_0x558d93=>{const _0x57f292=_0x27ebd8;try{_0x558d93['delete']();}catch(_0x495338){console[_0x57f292(0x19d)]('Error\x20deleting\x20message:',_0x495338);}})):_0x907038['error'](_0x27ebd8(0x1bf),_0x41c0ab));}else{_0x574728[_0x27ebd8(0x194)](_0x27ebd8(0x1a1)+_0x447b17);return;}}}else _0x70144e[_0x27ebd8(0x18a)]({'content':'<@!'+_0x4646e1['author']['id']+_0x27ebd8(0x1b0)+_0x88aedf});}}else{const _0x41db97=new _0x12bf4a()['setColor'](_0x3f17bf['EmbedColors'])[_0x27ebd8(0x1b7)]('<@!'+_0xb05bab[_0x27ebd8(0x183)]['id']+'>,\x20'+_0x57be6f)[_0x27ebd8(0x17e)]({'text':_0x7409c0[_0x27ebd8(0x183)]['username'],'iconURL':_0x1889ca['author'][_0x27ebd8(0x180)]({'dynamic':!![]})})['setTimestamp']();_0x1bdd71['reply']({'embeds':[_0x41db97]});}}const _0x420e26=require(_0x27ebd8(0x1a8));if(config['AutoResponse']['Enabled']&&config[_0x27ebd8(0x1bd)]['Responses']){if(_0x27ebd8(0x19a)==='gLHAK'){if(config['AutoResponse'][_0x27ebd8(0x17f)]&&!_0x1253a0)return;const _0x226671=_0x1eeb88['content'][_0x27ebd8(0x19b)](),_0x1c26b8=Object[_0x27ebd8(0x1bc)](config['AutoResponse'][_0x27ebd8(0x193)]),_0x5389e0=_0x420e26['findBestMatch'](_0x226671,_0x1c26b8);if(_0x5389e0[_0x27ebd8(0x1b9)]['rating']>=config[_0x27ebd8(0x1bd)]['ConfidenceThreshold']){const _0x35e80d=_0x5389e0['bestMatch'][_0x27ebd8(0x174)],_0x291754=config['AutoResponse'][_0x27ebd8(0x193)][_0x35e80d];if(!_0x291754||!_0x291754['Message']){if(_0x27ebd8(0x1ac)===_0x27ebd8(0x191))try{_0x33f7bc['delete']();}catch(_0x4c8809){_0x3407f5[_0x27ebd8(0x19d)](_0x27ebd8(0x1bf),_0x4c8809);}else{console[_0x27ebd8(0x194)](_0x27ebd8(0x1a1)+_0x35e80d);return;}}const _0x4b703e=_0x291754['Message'],_0x1df41c=_0x291754['Type']||_0x27ebd8(0x1b8);if(_0x1df41c===_0x27ebd8(0x1b3)){if(_0x27ebd8(0x186)===_0x27ebd8(0x172))_0x28ed57['log']('[INFO]\x20Invalid\x20response\x20type\x20for\x20key:\x20'+_0x41b956+_0x27ebd8(0x19e));else{const _0x13e28c=new EmbedBuilder()['setColor'](config['EmbedColors'])['setDescription']('<@!'+_0x1eeb88[_0x27ebd8(0x183)]['id']+'>,\x20'+_0x4b703e)['setFooter']({'text':_0x1eeb88[_0x27ebd8(0x183)][_0x27ebd8(0x1a7)],'iconURL':_0x1eeb88['author']['displayAvatarURL']({'dynamic':!![]})})['setTimestamp']();_0x1eeb88[_0x27ebd8(0x18a)]({'embeds':[_0x13e28c]});}}else _0x1df41c==='TEXT'?_0x1eeb88[_0x27ebd8(0x18a)]({'content':'<@!'+_0x1eeb88[_0x27ebd8(0x183)]['id']+'>,\x20'+_0x4b703e}):console[_0x27ebd8(0x194)](_0x27ebd8(0x17d)+_0x35e80d+'.\x20Expected\x20\x22EMBED\x22\x20or\x20\x22TEXT\x22.');}else{}}else{if(_0x401c19['OnlyInTickets']&&!_0x544cf6)return;let _0x331508='\x0a\x0a['+new _0x34f1c2()['toLocaleString']()+_0x27ebd8(0x196)+_0x3ac38f['command']+_0x27ebd8(0x1a0)+_0xf36865[_0x27ebd8(0x183)]['username'];_0x4fd28a[_0x27ebd8(0x173)]('./logs.txt',_0x331508,_0x415a3c=>{const _0xa72404=_0x27ebd8;if(_0x415a3c)_0x359ab8[_0xa72404(0x194)](_0x415a3c);});if(_0x23716c[_0x27ebd8(0x1b1)])_0x585da7[_0x27ebd8(0x194)](''+_0x55aab4['yellow']('[CUSTOM\x20COMMAND]\x20'+_0x1d86d1[_0x27ebd8(0x190)](''+_0x4364e0['author']['username'])+_0x27ebd8(0x189)+_0xd00932[_0x27ebd8(0x190)](''+_0x583c5c['CommandsPrefix']+_0x93beac['command'])));let _0x9466cc=new _0x19bb81()[_0x27ebd8(0x19f)](_0x10aa91[_0x27ebd8(0x187)])['setDescription'](''+_0x5e3a88['response']);if(_0x2e2ecc['deleteMsg'])_0x241aa3(()=>_0x3575dd[_0x27ebd8(0x16f)](),0x64);if(_0x4f8550['replyToUser']&&_0x1ff738[_0x27ebd8(0x1ae)])_0x4243fc[_0x27ebd8(0x18a)]({'embeds':[_0x9466cc]});if(_0xfafd4d[_0x27ebd8(0x188)]===![]&&_0x505803[_0x27ebd8(0x1ae)])_0x1e3151[_0x27ebd8(0x1b2)]['send']({'embeds':[_0x9466cc]});if(_0x311565[_0x27ebd8(0x188)]&&_0x1088be['Embed']===![])_0x4272d9['reply']({'content':''+_0x1a3808['response']});if(_0x27be97[_0x27ebd8(0x188)]===![]&&_0x2765ff[_0x27ebd8(0x1ae)]===![])_0x51380b[_0x27ebd8(0x1b2)]['send']({'content':''+_0x12e005[_0x27ebd8(0x16e)]});}}};