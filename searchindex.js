Search.setIndex({envversion:47,filenames:["_themes/README","api/compute","api/concept_caching","api/config","api/convert","api/db","api/examples","api/index","api/macro","api/memory","api/models","api/network","api/node","api/subsystem","api/utils","api/validate","compute","configuration","conventions","examples/2014paper","examples/basic","examples/conditional_independence","examples/index","examples/macro","examples/magic_cut","examples/residue","examples/xor","index"],objects:{"pyphi.concept_caching":{NormalizedConcept:[2,4,1,""],NormalizedMechanism:[2,4,1,""],NormalizedMice:[2,4,1,""],concept:[2,2,1,""]},"pyphi.concept_caching.NormalizedConcept":{cause:[2,1,1,""],effect:[2,1,1,""],mechanism:[2,1,1,""],phi:[2,1,1,""]},"pyphi.concept_caching.NormalizedMechanism":{inputs:[2,1,1,""],marblset:[2,1,1,""],normalized_indices:[2,1,1,""],outputs:[2,1,1,""],permutation:[2,1,1,""],unnormalized_indices:[2,1,1,""]},"pyphi.concept_caching.NormalizedMice":{direction:[2,1,1,""],mechanism:[2,1,1,""],phi:[2,1,1,""],purview:[2,1,1,""],repertoire:[2,1,1,""]},"pyphi.config":{get_config_string:[17,2,1,""],load_config_default:[17,2,1,""],load_config_dict:[17,2,1,""],load_config_file:[17,2,1,""],override:[17,4,1,""],print_config:[17,2,1,""]},"pyphi.config.override":{"__enter__":[17,3,1,""],"__exit__":[17,3,1,""]},"pyphi.convert":{holi_index2state:[4,2,1,""],loli_index2state:[4,2,1,""],nodes2indices:[4,2,1,""],nodes2state:[4,2,1,""],state2holi_index:[4,2,1,""],state2loli_index:[4,2,1,""],state_by_node2state_by_state:[4,2,1,""],state_by_state2state_by_node:[4,2,1,""],to_n_dimensional:[4,2,1,""]},"pyphi.db":{find:[5,2,1,""],generate_key:[5,2,1,""],insert:[5,2,1,""]},"pyphi.examples":{basic_network:[6,2,1,""],basic_subsystem:[6,2,1,""],cond_depend_tpm:[6,2,1,""],cond_independ_tpm:[6,2,1,""],fig10:[6,2,1,""],fig14:[6,2,1,""],fig16:[6,2,1,""],fig1a:[6,2,1,""],fig3a:[6,2,1,""],fig3b:[6,2,1,""],fig4:[6,2,1,""],fig5a:[6,2,1,""],fig5b:[6,2,1,""],fig6:[6,2,1,""],fig8:[6,2,1,""],fig9:[6,2,1,""],macro_network:[6,2,1,""],macro_subsystem:[6,2,1,""],propagation_delay_network:[6,2,1,""],residue_network:[6,2,1,""],residue_subsystem:[6,2,1,""],rule110_network:[6,2,1,""],rule154_network:[6,2,1,""],xor_network:[6,2,1,""],xor_subsystem:[6,2,1,""]},"pyphi.macro":{MacroNetwork:[8,4,1,""],effective_info:[8,2,1,""],emergence:[8,2,1,""],list_all_groupings:[8,2,1,""],list_all_partitions:[8,2,1,""],make_macro_network:[8,2,1,""],make_macro_tpm:[8,2,1,""],make_mapping:[8,2,1,""]},"pyphi.macro.MacroNetwork":{emergence:[8,1,1,""],grouping:[8,1,1,""],micro_network:[8,1,1,""],micro_phi:[8,1,1,""],network:[8,1,1,""],partition:[8,1,1,""],phi:[8,1,1,""]},"pyphi.memory":{DbMemoizedFunc:[9,4,1,""],cache:[9,2,1,""]},"pyphi.memory.DbMemoizedFunc":{get_output_key:[9,3,1,""],load_output:[9,3,1,""]},"pyphi.network":{Network:[11,4,1,""],from_json:[11,2,1,""]},"pyphi.network.Network":{"__eq__":[11,3,1,""],connectivity_matrix:[11,1,1,""],node_indices:[11,1,1,""],num_states:[11,1,1,""],perturb_vector:[11,1,1,""],size:[11,1,1,""],to_json:[11,3,1,""],tpm:[11,1,1,""]},"pyphi.node":{Node:[12,4,1,""]},"pyphi.node.Node":{"__eq__":[12,3,1,""],get_marbl:[12,3,1,""],index:[12,1,1,""],input_indices:[12,1,1,""],inputs:[12,1,1,""],label:[12,1,1,""],marbl:[12,1,1,""],network:[12,1,1,""],output_indices:[12,1,1,""],outputs:[12,1,1,""],raw_marbl:[12,1,1,""],state:[12,1,1,""],subsystem:[12,1,1,""],to_json:[12,3,1,""]},"pyphi.subsystem":{Subsystem:[13,4,1,""],mip_bipartitions:[13,2,1,""]},"pyphi.subsystem.Subsystem":{"__bool__":[13,3,1,""],"__eq__":[13,3,1,""],"__ge__":[13,3,1,""],"__gt__":[13,3,1,""],"__hash__":[13,3,1,""],"__le__":[13,3,1,""],"__len__":[13,3,1,""],"__lt__":[13,3,1,""],"__ne__":[13,3,1,""],"__repr__":[13,3,1,""],"__str__":[13,3,1,""],cause_effect_info:[13,3,1,""],cause_info:[13,3,1,""],cause_repertoire:[13,3,1,""],concept:[13,3,1,""],connectivity_matrix:[13,1,1,""],core_cause:[13,3,1,""],core_effect:[13,3,1,""],cut:[13,1,1,""],cut_matrix:[13,1,1,""],effect_info:[13,3,1,""],effect_repertoire:[13,3,1,""],expand_cause_repertoire:[13,3,1,""],expand_effect_repertoire:[13,3,1,""],expand_repertoire:[13,3,1,""],find_mice:[13,3,1,""],find_mip:[13,3,1,""],indices2nodes:[13,3,1,""],is_cut:[13,3,1,""],mip_future:[13,3,1,""],mip_past:[13,3,1,""],network:[13,1,1,""],node_indices:[13,1,1,""],nodes:[13,1,1,""],null_concept:[13,1,1,""],null_cut:[13,1,1,""],perturb_vector:[13,1,1,""],phi:[13,3,1,""],phi_max:[13,3,1,""],phi_mip_future:[13,3,1,""],phi_mip_past:[13,3,1,""],proper_state:[13,1,1,""],repertoire_cache_info:[13,3,1,""],size:[13,1,1,""],state:[13,1,1,""],to_json:[13,3,1,""],tpm:[13,1,1,""],unconstrained_cause_repertoire:[13,3,1,""],unconstrained_effect_repertoire:[13,3,1,""]},"pyphi.utils":{apply_boundary_conditions_to_cm:[14,2,1,""],apply_cut:[14,2,1,""],bipartition:[14,2,1,""],bipartition_indices:[14,2,1,""],block_cm:[14,2,1,""],block_reducible:[14,2,1,""],comb_indices:[14,2,1,""],combs:[14,2,1,""],condition_tpm:[14,2,1,""],directed_bipartition:[14,2,1,""],directed_bipartition_indices:[14,2,1,""],directed_bipartition_of_one:[14,2,1,""],fully_connected:[14,2,1,""],get_inputs_from_cm:[14,2,1,""],get_outputs_from_cm:[14,2,1,""],hamming_emd:[14,2,1,""],marginalize_out:[14,2,1,""],max_entropy_distribution:[14,2,1,""],np_hash:[14,2,1,""],phi_eq:[14,2,1,""],powerset:[14,2,1,""],print_repertoire:[14,2,1,""],print_repertoire_horiz:[14,2,1,""],relevant_connections:[14,2,1,""],state_of:[14,2,1,""],strongly_connected:[14,2,1,""],submatrix:[14,2,1,""],uniform_distribution:[14,2,1,""]},"pyphi.validate":{StateUnreachableError:[15,5,1,""],conditionally_independent:[15,2,1,""],connectivity_matrix:[15,2,1,""],cut:[15,2,1,""],direction:[15,2,1,""],network:[15,2,1,""],node_states:[15,2,1,""],perturb_vector:[15,2,1,""],state_length:[15,2,1,""],state_reachable:[15,2,1,""],subsystem:[15,2,1,""],tpm:[15,2,1,""]},pyphi:{compute:[16,0,0,"-"],concept_caching:[2,0,0,"-"],config:[17,0,0,"-"],convert:[4,0,0,"-"],db:[5,0,0,"-"],examples:[6,0,0,"-"],macro:[8,0,0,"-"],memory:[9,0,0,"-"],models:[10,0,0,"-"],network:[11,0,0,"-"],node:[12,0,0,"-"],subsystem:[13,0,0,"-"],utils:[14,0,0,"-"],validate:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","class","Python class"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:function","3":"py:method","4":"py:class","5":"py:exception"},terms:{"10e":[3,17],"\u03c6":19,"__bool__":13,"__enter__":[3,17],"__eq__":[11,12,13],"__exit__":[3,17],"__ge__":13,"__gt__":13,"__hash__":13,"__le__":13,"__len__":13,"__lt__":13,"__ne__":13,"__pyphi_cache__":[3,17],"__repr__":[3,13,17],"__str__":13,"_from":14,"_theme":0,"boolean":23,"break":[3,17],"case":[3,12,17,19,20,23,24,25,26],"char":[],"class":[2,3,8,9,11,12,13,14,17,19],"default":[3,13,17],"export":19,"final":20,"float":[2,8],"function":[2,3,4,5,6,9,14,17,18,19,20,22,23,27],"import":[3,4,13,14,17,19,20,21,23,24,25,26,27],"int":[2,4,11,12,13,14],"long":[3,17],"new":[3,13,14,17,24],"null":[13,19],"return":[2,3,4,5,8,9,11,12,13,14,15,17,19,20,23],"true":[2,3,12,13,14,17,19,21,23,24,26],"try":14,"while":[4,24,25],a_network:11,abc:[19,24],abl:26,about:[3,11,13,17,18,19,20,24,26],abov:[21,24],absenc:13,abspath:0,academi:8,access:[19,20],accomplish:23,accord:[4,11,14,15],accumul:[3,17],accur:[3,17],accuraci:[3,17],achiev:6,across:23,act:8,actual:[3,13,17],add:0,addit:[21,24,26],addon:0,adjac:11,advanc:6,affect:[],after:[3,6,13,17,24],again:[3,17,19,26],against:[],albantaki:[8,19],alia:13,all:[2,3,6,8,11,13,14,17,19,20,21,22,23,24,25,26,27],all_complex:19,all_cut_mechan:[],allow:[3,15,17],along:[6,19,22,27],alreadi:[5,19],also:[0,3,4,6,17,18,19,24,25,26],altern:[0,23],although:[3,17,24],alwai:[18,24,26],amount:[3,17,24],analysi:[8,23,26],analyz:[11,19,21,24],ani:[3,13,15,17,19,23,24,26],anoth:[3,14,17],anyth:[3,17,24],append:0,appli:[13,18,19,24],apply_boundary_conditions_to_cm:14,apply_cut:14,appropri:[3,17,23],arang:14,arg:9,argument:[9,11,13,14,19,20],around:[3,17],arrai:[4,8,11,13,14,19,20,23,24,25,26],arrang:14,array_equ:19,arriv:20,assert:[3,17],assess:19,assign:19,associ:[3,5,17],assum:[3,4,17,19,21],assume_cuts_cannot_create_new_concept:[3,17],assumpt:[3,8,17,19,21,23],attr:[],attribut:[11,19],autogener:7,automat:[3,17,21],automaton:[6,24],auxilari:11,avail:[3,8,17,18,19,22,23,27],averag:8,avoid:[3,17,19],awai:26,back:[9,21],backend:[3,17],background:[3,17,19],backward:[1,3,16,17],base:[3,8,17,24,26],basic:[],basic_network:[6,20],basic_subsystem:[6,20],beat:8,becaus:[13,14,19,23,25,26],becom:[3,17,19],been:[13,19],befor:[3,17,19],begin:[22,26,27],behaviour:[21,24],belong:[12,13,20],below:19,best:27,between:[2,3,6,8,11,13,14,17,18,19,23,25],big_mip:[3,17,19,20,24],big_phi:20,bigmip:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],binari:[11,14,18,21],bipart:[13,14],bipartit:[13,14],bipartition_indic:14,bit:[],black:19,blanket:12,blanklin:[4,14,19,21,25,26],block:[3,14,17],block_cm:14,block_reduc:14,bool:[14,23],both:[3,4,17,18,19,24,26],boundari:12,box:19,broad:2,broadcast:14,broken:2,bug:27,build:19,built:19,button:19,c_node:24,cach:[],cache_bigmip:[3,17],cache_concept:[],cache_kei:[],caching_backend:[3,17],calcul:[3,13,17,19,20,24,25,27],call:[3,17,18,19],can:[0,3,4,8,11,14,15,17,19,20,22,23,24,25,26,27],candid:[13,19],candidate_indic:[],cannot:[15,26],care:24,carri:14,caus:[2,3,13,14,17,19,20,24,25,26],causal:[8,19,21,26],cause_effect_info:[13,19],cause_info:[13,19,24,25,26],cause_repertoir:[13,19,24],cde:25,cellular:[6,24],certain:[3,13,17],certainli:26,chain:14,chanc:[3,17,24],chang:[14,18,21,24],charact:[],check:[0,3,8,12,15,17,23,24],choic:[18,19],choos:[18,19],chr:[],circumst:24,click:19,coars:[6,8,23],code:7,collaps:14,collect:[3,17],collection_nam:[3,17],column:[4,11,18,19],comb:14,comb_indic:14,combin:[14,23],combination_indic:14,come:24,command:19,common:15,compact:19,companion:19,compar:[13,14,23],comparison:13,compat:[1,16],complet:[3,17,25,26],complex:[8,19,23,24,26,27],composit:25,comput:[],concept:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],concept_a:19,concept_cach:[],concept_dist:[],conceptu:[19,24],conceptual_inform:19,concern:[3,17],conclud:23,concret:24,cond_depend_tpm:[6,21],cond_independ_tpm:[6,21],condens:19,condit:[],condition:[4,15,21],condition_tpm:14,conditionally_independ:[15,23],conf:[0,3,17],config:[],configur:[],confirm:26,confront:18,connect:[],connectivity_matrix:[11,13,14,15,19,20,23],connectivitymatrix:[],conscious:19,consequ:[3,17],consid:[3,15,17,19,21,23,26],consider:[3,17,23],consist:[2,5,19,23,24,26],constant:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],constel:[3,17,19,20,24,26,27],constellation_dist:[],constitut:[],constrained_nod:15,construct:[13,14,20],constructor:19,consult:19,contain:[0,2,3,6,14,15,17,19,20,23,24,25,27],content:0,context:[3,11,17],continu:21,contradict:25,control:[3,17],conveni:[3,17,19],convent:[],convers:[4,18],convert:[],copi:[3,6,17,19],core:[2,3,13,17,19],core_caus:[13,19,24],core_effect:[13,19,24],correspond:[],correspong:8,cost:[3,17],could:[3,17,26],count:[3,17],counterintuit:25,counterpart:2,cours:20,cover:19,cpu:[3,17],crash:[3,17],creat:[8,19,20,21,23,24,25,26],critic:[3,17],cross:19,current:[3,6,12,15,17,19,21,24,25,26],cut:[],cut_constel:24,cut_matrix:13,cut_repertoir:24,cut_subsystem:24,damaged_by_cut:[],data:[2,3,11,14,17,20],databas:[3,5,9,17],database_nam:[3,17],databs:9,dbmemoizedfunc:9,deal:[3,17],debug:[3,17],decim:[3,4,17,18,19],decor:[3,9,17],decreas:24,deeper:20,deepli:20,def:[3,17],defin:[3,8,17,19,20,25,27],delai:6,demonstr:19,denot:25,depend:[21,23,26],depict:19,describ:[24,25,26],descript:[19,20],desir:14,destroi:[14,24],detail:[8,19,27],determin:[23,24,25,26],determinist:[6,21,23],diagon:14,diagram:6,dict:[2,3,17],dictionari:[2,3,17],dicuss:27,differ:[2,6,8,12,13,14,18,19,21,23,25],differenti:23,dimens:[2,14,19],dimension:[11,20],direct:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],directed_bipartit:14,directed_bipartition_indic:14,directed_bipartition_of_on:14,directori:[3,17],disabl:[2,3,17],discuss:[11,20,22,25,26],dismiss:24,displai:[12,23],distanc:[3,13,14,17,19,25],distribut:[13,14],doc:0,document:[0,2,3,4,6,7,8,17,19,20,21,25],doe:[5,8,14,18,19,21,23,24,26],doesn:12,doi:8,don:19,done:[2,3,13,17],down:[3,17,18,26],driv:0,due:26,dure:[3,17],each:[2,6,8,11,12,13,14,18,19,22,23,25,27],eampl:[],earth:[3,14,17,19],easer:23,easi:[3,17],easiest:[3,17],effect:[2,3,8,13,14,17,19,20,24,25,26],effect_info:[8,13,19,24,26],effect_repertoir:[13,19],effective_info:8,effort:[3,17],either:[2,9,11,13,14,18,25,26],element:[2,4,6,8,14,18,19,20,23,24,26],elementari:[6,26],emd:[3,17],emd_eq:[],emerg:[],emploi:[3,17],empti:[13,14,25],enabl:[3,8,17],encod:[11,18],encourag:19,enough:[24,26],entir:[8,13,19,20,26],entri:[14,19,20,27],entropi:14,epsilon:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],eq_repertoir:[],equal:[11,12,13,19,21,26],equalival:24,equip:[3,17],equival:8,erik:8,error:[3,17],esent:[],essenti:6,etc:[3,17,20,27],evalu:[3,13,17,19,20,25],even:[3,17],ever:13,everi:[11,18,20,21],exampl:[],exc:[3,17],except:[3,15,17],exclud:13,exclus:[],exercis:19,exist:[0,6,19,24,25,26],exogen:21,expand:13,expand_cause_repertoir:13,expand_effect_repertoir:13,expand_partitioned_cause_repertoir:[],expand_partitioned_effect_repertoir:[],expand_repertoir:13,expect:19,expens:[3,17],explain:21,explan:19,explicitli:[3,17],explor:[21,23,24],expos:5,extern:[3,13,14,17,26],external_indic:14,extrins:26,fals:[3,6,13,14,17,23],familiar:[19,27],faster:[],fastest:[3,17,18],few:19,fig10:6,fig14:[6,19],fig16:[6,19],fig1a:[6,19],fig3a:[6,19],fig3b:[6,19],fig4:[6,19],fig5a:[6,19],fig5b:[6,19],fig6:[6,19],fig8:[6,19],fig9:6,figur:[],file:[3,11,17,19],filenam:[3,11,17],filesystem:[3,9,17],filtered_arg:5,find:[2,3,5,8,13,17,19,23,24,26],find_mic:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],find_mip:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],first:[18,19,21,23,24,25,26],five:24,fix:[12,14],fixed_nod:14,flask:0,flatten:24,flip:[6,21],flow:[3,17],fmt_big_mip:[],fmt_concept:[],fmt_constel:[],fmt_mip:[],fmt_partit:[],focu:[23,26],focus:26,folder:0,follow:[0,2,4,6,11,14,19,22,24,26,27],form:[2,4,11,19,20,21,23],format:[3,4,17,27],found:[2,3,17,19],free:15,from:[2,3,4,5,6,7,8,13,14,15,17,19,20,21,22,23,24,26],from_json:[11,19],front:26,fs_cache_directori:[3,17],fs_cache_verbos:[3,17],full:19,fulli:[6,24,26],fully_connect:14,func:9,furthermor:[19,26],futur:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],future_purview:13,gain:26,gate:[6,19,26],gener:[2,6,12,14,19],generate_kei:5,get:[],get_config_str:[3,17],get_inputs_from_cm:14,get_marbl:12,get_num_process:[],get_output_kei:9,get_outputs_from_cm:14,git:0,github:27,giulio:8,give:[4,11,13,14,18,19,24],given:[3,4,5,8,9,11,14,15,17,19,21],good:[3,17],grain:[6,8,23],graph:14,graphic:19,greater:[6,23,24,25],group:[8,23],grow:14,guid:0,half:13,hamming_emd:[14,24],hand:19,handl:21,happen:[3,17],hash:[13,14],have:[2,3,4,11,12,13,14,17,18,19,21,23,24,26],help:19,helper:[],henc:26,here:[3,13,17,19,20,21,22,24],high:4,higher:25,highest:18,highlight:24,hoel:8,hold:[11,25,26],holi:[4,18],holi_index2st:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],holi_index:4,hopefulli:19,horizont:14,host:[3,17],how:[3,17,19,21,24,26],howev:[3,4,17,19,23,24],html:19,html_theme:0,html_theme_path:0,http:19,human:14,idea:25,identifi:[13,23,24],ignor:9,iit:[],illustr:19,implement:[3,14,17],imposs:[],includ:[11,14,19,20,24],incom:14,incorrect:24,increas:[3,17,23,24],inde:19,indent:[],independ:[],index:[],indic:[2,4,11,12,13,14,18,19,20,21,25],indices2nod:[13,24],individu:[3,17,25,26],info:[3,4,17],inform:[3,4,6,8,13,17,19,20,21,23,24,25,26,27],initi:[2,3,17],input:[2,5,12,14,15,19,21,25],input_indic:12,insert:5,insignific:[3,17],instal:[3,17],instanc:[3,17,20],instantan:21,instead:[23,25],intact:[19,24],integ:[2,4],integr:[6,8,19,20,23,24,27],integratedinformationtheori:19,intend:[0,3,17],interact:[3,17,19],interest:[11,19,25,27],interfac:[5,19],intermedi:20,interpret:[8,19,23],intrins:[19,26],introduc:19,invalu:[],invers:2,investig:[8,24,26],involv:23,irreduc:[2,3,13,17,19,25,26],is_cut:13,issu:[21,27],iter:[2,3,13,14,17],itertool:14,itself:[11,20,26],json:[11,13,19],json_fil:19,just:[13,19,20,21],keep:[5,27],kei:[2,5,9,19],kenneth:0,keyword:[9,11,13,14],know:[24,26],kr_small:0,kwarg:9,label:[2,12,19,25],larg:[0,3,17,19],larger:[3,17,26],larissa:8,last:18,later:[3,17],latter:26,least:[2,3,17,23,25],left:[15,19],legibl:[3,17],len:[19,20,26],length:14,less:19,let:[20,23,24,25,26],level:[3,8,17,25,26],librari:[0,3,17,27],lightweight:2,like:[2,19,21],limit:[3,17],line:19,link:[],list:[3,4,8,9,12,13,14,17,18,22,23,27],list_all_group:[8,23],list_all_partit:[8,23],load:[3,17,19,21,24],load_config:[],load_config_default:[3,17],load_config_dict:[3,17],load_config_fil:[3,17],load_output:9,local:[3,17,19],localhost:[3,17],locat:[],log_config_on_import:[3,17],logfil:[3,17],logger:[3,17],logging_config:[3,17],logic:[6,24],loli:[],loli_index2st:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],loli_index:4,longer:19,look:[19,20,24],loop:[3,17,26],lose:26,loss:[3,14,17,24],lot:[3,17],low:[],lower:[3,17],lowest:18,machin:[3,17],macro:[],macro_main_complex:23,macro_network:[6,8,23],macro_phi:8,macro_st:23,macro_subsystem:6,macro_tpm:[8,23],macronetwork:8,made:[4,18,19],magic:[],mai:[3,12,13,14,17,19,23,24,26],main:[8,19,23,24,26,27],main_complex:[3,17,19,23,24,26],maintain:[1,16],major:19,make:[3,14,17,19,20,23,25],make_macro_network:[8,23],make_macro_tpm:[8,23],make_map:[8,23],make_repr:[],manag:[2,3,17],manipul:26,manual:[3,17],map:[2,4,8,18,23],marbl:[2,12],marblset:2,margin:[14,21],marginalize_out:[14,21],markov:12,match:19,matric:[],matrix:[6,11,13,14,15,18,19,20,23,27],matter:26,max_entropy_distribut:14,maxim:[2,8,13,19],maximum:[8,13,14,19,23],maximum_cache_memory_percentag:[3,17],mean:[3,6,11,17,18,23,24,26],meaning:[],meant:19,mechan:[2,6,8,13,14,19,24,25,26],memoiz:[2,9],memori:[],merit:25,messag:15,method:[3,8,12,15,17,19,27],mic:19,mice:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],mice_cach:13,mice_caus:24,mice_effect:24,micro:[],micro_network:8,micro_phi:8,micro_tpm:8,might:[3,14,17,19],mimic:6,mind:27,minim:[3,17,19,25],minimum:[13,19,24],mininum:13,minor:19,mip:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],mip_:19,mip_a:25,mip_ab:25,mip_bipartit:13,mip_c:19,mip_futur:[13,19],mip_past:[13,19,25,26],mitsuhiko:0,mode:[3,17],model:[],modifi:14,modul:[4,11,14,18,19,21,22,23,27],mongodb:[3,5,17],mongodb_config:[3,17],more:[3,4,8,13,14,17,19,20,21,26],most:0,move:[3,17],mover:[3,14,17,19],much:[3,17],multipl:19,must:[3,11,12,17,18,21,23,24,25,26],n0n1n2:26,name:[3,17,19],nation:8,ndarrai:[2,4,11,13,14],ndarrrai:14,necessarili:[],need:[3,5,12,13,17,19,20],neg:[3,17,24],nest:20,network:[],network_dictionari:19,network_st:14,never:[3,13,17],new_conf:[3,17],new_config:[],new_purview:13,newlin:[],next:[19,20,24,25,26],nice:[],node:[],node_indic:[11,13,14,15,19,24],node_st:15,nodes1:14,nodes2:14,nodes2indic:4,nodes2st:4,nois:8,noisi:19,non:[3,17,19,21,23],nondeterminist:4,none:[3,5,6,8,11,12,13,14,17,26],nonzero:26,normal:[2,3,12,17],normalize_tpm:[2,3,17],normalized_indic:2,normalized_mechan:2,normalizedconcept:2,normalizedmechan:2,normalizedmic:2,note:[3,13,14,17,18,19,21,24],noth:5,notion:[14,26],now:[19,20,21,24,26],np_hash:14,null_concept:[13,19],null_cut:13,num_stat:11,number:[3,11,13,14,17,18,20,23,24],number_of_cor:[3,17],number_of_nod:[4,14],numpi:[14,19,20,21],obj:[],object:[2,3,4,8,9,11,12,13,17,19,20,23,25,27],observ:26,obtain:[3,17,19],occur:24,off:[3,6,8,17,21,23,24,25,26],often:[3,17],oizumi:19,old:[1,16],omit:[8,19],onc:[3,17],onli:[3,6,12,13,14,15,17,18,19,21,24,25,26],onlin:[8,19],onto:14,open:19,oper:[],optim:[3,17],option:[3,12,13,14,17,19,20],order:[],org:19,origin:[3,6,17,21,24],other:[11,12,13,14,18,19,23,26],otherwis:[2,3,13,14,15,17,20,24],ouptut:2,our:[19,20],out:[0,14,19,21,24],outgo:14,outlin:2,output:[2,3,4,9,12,14,17,19],output_indic:12,outsid:[14,26],over:[2,8,13,14,19,24,25,26],overal:24,overlap:[19,25],overrid:[3,17],own:[2,19,26],page:0,pair:13,paper:[],parallel:[3,17],parallel_concept_evalu:[3,17],parallel_cut_evalu:[3,17],parallel_verbos:[],paramet:[3,4,8,11,13,14,17],parent:[],part:[3,13,17,19,25,26],partial:13,particular:[8,23],partit:[2,8,13,14,19,23,24,25,26],partitioned_constel:24,partitioned_repertoir:25,pass:19,past:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],past_purview:13,past_tpm:24,path:[0,11,19],per:14,percentag:[3,17],perform:[3,17,27],permut:2,persist:[],perspect:[19,26],pertub:15,perturb:[11,13,15],perturb_valu:14,perturb_vector:[11,13,14,15],phenomenolog:19,phi:[2,3,8,13,14,17,19,20,23,24,25,26],phi_eq:14,phi_max:13,phi_mip_futur:13,phi_mip_past:13,physic:[8,24,26],place:[3,17,18,19],plai:[3,17],pleas:[3,17,19,27],pna:8,point:[13,19,24,27],port:[3,17],posisbl:8,posit:[2,12],possibl:[3,8,11,13,14,17,23,24,25,26],possible_complex:19,potenti:[3,17,26],power:[3,14,17,19,24,26],powerset:[14,19],pprint:23,preced:[],precis:[],precomput:[2,3,17],prepend:[],present:5,pretti:[3,17],previou:[6,19,24,26],previous:[3,17],primari:[6,11],principl:24,print:[3,14,17,21],print_config:[3,17],print_partit:[],print_repertoir:14,print_repertoire_horiz:14,probabl:[6,11,13,19,21,24,26],procedur:2,proceed:8,process:[3,17,19,26],product:[],program:[3,17,19,21],project:[0,3,17,19],proof:24,propag:6,propagation_delay_network:6,proper:[3,13,17],proper_st:13,properti:[18,20],provid:[3,11,15,17,19,26],prune:26,pull:27,purpos:19,purview:[2,8,13,14,19,21,24,25,26],purview_cach:11,put:0,pyphi:[],pyphi_config:[3,17],python3:19,python:[2,3,17,19,22,27],qual:19,qualia:19,quantifi:[8,25],quantiti:20,question:[18,23,26],quickli:[3,17],rais:[3,13,15,17],ram:[3,17],rang:[19,20,24],rare:24,rather:[3,17,19],rational:18,raw_marbl:12,reach:15,reachabl:[3,17],read:[3,17,23],readabl:[3,14,17],readable_repr:[3,17],reader:19,real:2,reason:[3,17,24,26],reassign:19,receiv:14,recip:14,recommend:[3,17],recomput:[3,17],reconstitut:2,reconstruct:[3,17],record:2,redi:[3,17],redis_cach:[3,17],redis_config:[3,17],reduc:[3,14,17,24,25,26],regardless:24,reitz:0,relat:[0,2],relationship:[23,26],relev:[22,27],relevant_connect:14,reli:[3,17],remov:[14,19],render:2,reorder:2,repertoir:[2,13,14,19,20,24,25,26],repertoire_cach:13,repertoire_cache_info:13,repl:[3,17,19,22,27],report:[13,27],repositori:[0,27],repr:[3,17],repres:[2,3,11,12,13,14,17,18,19,25,27],represent:[3,4,11,12,13,17,19,21],request:[13,27],requir:[3,17,19],rerais:[3,17],reset:[3,17],reshap:[4,14],residu:[],residue_network:[6,25],residue_subsystem:[6,25],respect:[19,25],rest:19,restrict:[13,15,21],result:[3,4,17,19,21,23,24,25,26],retreiv:[3,17],retriev:[2,25],reus:[3,17],reveal:26,revers:4,risk:[2,3,17],robust:[3,17],roughli:6,round:19,row:[4,11,18,19],rule110_network:[6,24],rule154_network:[6,24],rule:[6,19,24],run:[3,17,19],sai:23,same:[2,3,6,11,12,13,14,17,18,19,21,24,26],satisfi:[8,21,23],save:[3,17],sbn_tpm2:21,sbn_tpm:21,sbs_tpm:21,scale:[6,8,23,24],scienc:8,script:[3,17],second:[23,24,26],secondari:27,section:[3,17,19],see:[2,3,4,8,11,13,14,17,18,19,20,21,23,25,26,27],select:[6,19,23],self:[3,17,26],send:2,sens:18,sensibl:18,sent:[],separ:[],sequenc:[11,13,14],sequenti:[3,17],serv:[19,24],set:[2,3,8,12,13,14,17,19,23,24,27],sever:[3,13,17,18,19,24],shape:11,share:14,shell:[3,17],should:[3,5,9,17,19,20,25],show:[8,21,26],shown:[6,19],shrunk:[],side:[],signal:6,signific:[],significantli:[3,17],similar:[25,26],similarli:[18,26],simpl:[6,20],simpli:[20,23],simul:[3,17],sinc:[3,13,14,17,19,21,24,25,26],singl:[3,17,25],single_nodes_with_selfloops_have_phi:[3,17],singleton:[14,19],sink:14,sit:26,situat:[18,21,24],size:[8,11,13,14,15,19,20,24],slow:[3,17],small:[0,3,17,19],small_phi_tim:[],softwar:[19,27],solei:23,some:[3,5,14,17,27],some_config:[3,17],sometim:[3,17],sort:[2,26],sourc:[7,14],space:[8,13,19],spatial:[8,23,24],speak:13,specif:[3,17,23,25,26],specifi:[2,3,13,17,19,26],specifii:[],speed:[3,17],split:[],splits_mechan:[],sqeez:14,squar:[4,11,14,20],squeez:[2,19,21],stabl:[2,18],stai:[6,21],standard:[0,3,17],star:[],start:[],state2holi_index:4,state2loli_index:4,state:[2,3,4,6,8,11,12,13,14,15,17,18,19,20,21,23,24,25,26],state_by_node2state_by_st:[4,21],state_by_node_tpm:4,state_by_state2state_by_nod:[4,21],state_by_state_tpm:4,state_length:15,state_of:14,state_reach:15,stateunreachableerror:15,statist:13,stdout:[3,17],step:[6,19,20,26],still:[24,26],store:[2,3,5,17,19],str:[2,11,12,13],strictli:[3,13,17],string:[3,13,17],strong:14,strongli:14,strongly_connect:14,structur:[14,19,20,24,25],subgraph:14,submatrix:14,submodul:0,subset:[13,14,19,20],subsystem:[],subsytem:19,success:14,suffici:26,suitabl:[2,14],sum:24,surpris:26,symmetr:19,symmetri:26,tabl:26,take:[3,14,17,19,20],taken:13,technic:14,tell:[24,26],tempor:13,term:[8,23,26],test:[13,14],test_someth:[3,17],testcas:[3,17],than:[3,4,13,14,17,19,20,23,24,25,26],thei:[2,3,6,11,12,14,17,19,21,24,26],them:[3,13,17,19,23,26],theme:0,theori:19,therefor:4,thi:[0,2,3,4,5,6,8,11,12,13,14,17,18,19,20,21,23,24,25,26],third:[21,24,26],those:[13,14,19,26],thrash:[3,17],three:[6,23,24,26],through:27,throughout:18,thu:[19,23,24,25,26],time:[3,6,17,19],timestep:12,to_json:[11,12,13],to_n_dimension:4,togeth:19,tononi:[8,19],took:[],top:26,total:[3,14,17,19],touch:26,tpm2:21,tpm2_marginalizec:21,tpm2_purviewab:21,tpm:[2,3,4,6,8,11,12,13,14,15,17,18,19,20,21,23,24,27],tracker:27,tradit:[3,17],transit:[11,19],transpar:[3,17],treat:[3,14,17],trivial:14,truthi:[],tupl:[2,4,13,14,18,20,25],turn:[3,17,24],two:[2,3,6,11,12,13,14,17,19,21,23,24,25,26],type:[4,8,11,13,14,15,19],typo:19,uncondit:14,unconstrain:[13,19],unconstrained_cause_repertoir:[13,19],unconstrained_effect_repertoir:[13,19],undefin:19,under:[4,8,18,23],understand:[24,26],understood:26,unexpect:24,unidirect:[3,13,17,19],uniform:14,uniform_distribut:14,uniqu:[2,12,21],unlik:24,unnorm:2,unnormalized_indic:2,unpartit:[2,13,19,24,25],unpartitioned_constel:[20,24,26],unpartitioned_repertoir:[],unreach:8,unselect:19,updat:19,upon:[2,3,17],usag:[],user:19,usual:19,util:[],valid:[],validate_subsystem_st:[3,8,17],valu:[2,3,5,13,14,17,19,20,21,23,24,26],valueerror:13,vari:18,variabl:[19,21],variou:[3,17,18,27],vector:[11,13,15],verbos:[],veri:[0,19],verifi:19,version:[6,14],vertic:14,via:[3,17],view:19,visual:19,wai:[2,18,19,23,27],want:[3,17,19,20,24],warn:[3,17,21],weight:8,welcom:27,well:[23,25],were:[19,26],what:[24,25,26],when:[2,3,15,17,21,23,24,27],whenev:[5,18],where:[2,3,4,11,13,14,17,18,19,20,25],whether:[3,11,12,13,14,15,17,19,21,23],which:[2,3,6,8,12,13,14,17,18,19,20,21,23,24,25,26,27],whitespac:[],whoe:24,whole:[13,19,26],whose:14,why:[24,26],within:[3,17,19,24,26],without:[14,15,19,24,26],work:19,workflow:19,would:[24,26],wrap:[],wrapper:[],write:18,written:[3,17],xor:[],xor_network:[6,26],xor_subsystem:[6,26],yaml:[3,17],yield:19,yml:[3,17],you:[0,3,17,19,22,27],your:[0,2,3,17,19],yourself:27,zero:[3,15,17,19,23,25]},titles:["krTheme Sphinx Style","<code class=\"docutils literal\"><span class=\"pre\">compute</span></code>","<code class=\"docutils literal\"><span class=\"pre\">concept_caching</span></code>","<code class=\"docutils literal\"><span class=\"pre\">config</span></code>","<code class=\"docutils literal\"><span class=\"pre\">convert</span></code>","<code class=\"docutils literal\"><span class=\"pre\">db</span></code>","<code class=\"docutils literal\"><span class=\"pre\">examples</span></code>","API Reference","<code class=\"docutils literal\"><span class=\"pre\">macro</span></code>","<code class=\"docutils literal\"><span class=\"pre\">memory</span></code>","<code class=\"docutils literal\"><span class=\"pre\">models</span></code>","<code class=\"docutils literal\"><span class=\"pre\">network</span></code>","<code class=\"docutils literal\"><span class=\"pre\">node</span></code>","<code class=\"docutils literal\"><span class=\"pre\">subsystem</span></code>","<code class=\"docutils literal\"><span class=\"pre\">utils</span></code>","<code class=\"docutils literal\"><span class=\"pre\">validate</span></code>","&lt;no title&gt;","Configuration","Conventions","IIT 3.0 Paper (2014)","Basic Usage","Conditional Independence","Usage and Examples","Emergence (Macro/Micro)","Magic Cuts","Residue","XOR Network","PyPhi"],titleterms:{api:[7,27],approxim:[3,17],basic:20,bit:18,cach:[3,17],comput:1,concept_cach:2,condit:21,config:3,configur:[17,27],connect:18,convent:[18,27],convert:4,correspond:18,cut:24,emerg:23,exampl:[6,22],figur:19,get:27,iit:19,independ:21,index:18,krtheme:0,log:[3,17],loli:18,low:18,macro:[8,23],magic:24,matric:18,memori:9,micro:23,miscellan:[3,17],model:10,network:[11,26],node:[12,18],numer:[3,17],order:18,paper:19,precis:[3,17],pyphi:27,refer:[7,27],residu:25,resourc:[3,17],sphinx:0,start:27,style:0,subsystem:13,system:[3,17],theoret:[3,17],usag:[20,22],util:14,valid:15,xor:26}})