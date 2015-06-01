;(function($) {
	'use strict;'
	function tabSwitcher(ele, options) {
		var defaults = {
			root: $(ele),
			tab: '.js-tab-btn',
			tabpanel: '.js-tab-contents-item',
			selectedClass: 'active'
		}
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	tabSwitcher.prototype = {
		init: function() {
			var self = this,
				owner = self.options,
				btn = owner.root.find(owner.tab),
				me;

			owner.root.on('click.tabSwitcher', owner.tab, function(e) {
				e.preventDefault();
				me = $(this);

				$(btn).removeClass(owner.selectedClass);
				me.addClass(owner.selectedClass);
				owner.root.find(owner.tabpanel).removeClass(owner.selectedClass);
				$(me.find('a').attr('href')).addClass(owner.selectedClass);
			});
		}
	};

	$.fn.tabSwitcher = function(options) {
		return this.each(function() {
			new tabSwitcher(this, options);
		});
	};
})(jQuery);