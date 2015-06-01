jquery.tabSwitcher.js
====================

シンプルなタブ切替えプラグイン。

##Description
このプラグインは、タブによるコンテンツの切り替えを実現するプラグインです。

##Usage

1. 対象となるタブとタブパネルを内包するブロック要素に初期化の指定をします。  
1. 初期表示させるタブにはアクティブ用のclass（デフォルトはactive）を付与します。
1. タブaタグに任意のハッシュタグを指定します。
1. タブパネルとなる外枠のブロック要素にIDを付与します。この時、3で指定したハッシュタグと同じIDのタブパネルが表示されるようになります。

###html

デフォルトで使用する場合は、以下の通り記述してください。

	<div id="js-tab-container" class="tab-container">
		<ul class="tab clearfix">
			<li class="js-tab-btn tab-btn active"><a href="#test01">テスト01</a></li>
			<li class="js-tab-btn tab-btn"><a href="#test02"><span>テスト02</span></a></li>
			<li class="js-tab-btn tab-btn"><a href="#test03"><span>テスト03</span></a></li>
		</ul>
		<div class="tab-contents">
			<ul>
				<li id="test01" class="js-tab-contents-item tab-contents-item active">
					<p>コンテンツ</p>
				</li>
				<li id="test02" class="js-tab-contents-item tab-contents-item">
					<p>コンテンツ</p>
				</li>
				<li id="test03" class="js-tab-contents-item tab-contents-item">
					<p>コンテンツ</p>
				</li>
			</ul>
		</div>
	</div>
	
###javascript

デフォルトで使用する場合は、以下の通り記述してください。

    $(function() {
	    $('#js-tab-container').tabSwitcher();
    });

##Options

オプション名  | デフォルト            | 説明
------------- | -------------         | -------------
tab           | .js-tab-btn           | タブに付与するclass
tabpanel      | .js-tab-contents-item | コンテンツに付与するclass
selectedClass | active                | アクティブなタブに付与するclass

###Example

    $(function() {
	    $('#js-tab-container').tabSwitcher({
	    	tab : '.yourTab',
	    	tabpanel : 'yourTabPanel',
	    	selectedClass : 'yourSelectedClass'
	    });
    });

##Copyright

Copyright (c) 2015 Yuki Sugitani
