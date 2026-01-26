( function( $ ) {
    'use strict';
	function printDiv(printhtml) {
		var newWin = window.open('', 'Print-Window');
		newWin.document.open();
		newWin.document.write(printhtml);
		newWin.document.close();
		setTimeout(function(){ newWin.print(); }, 500);
		setTimeout(function(){newWin.close();}, 500);
    }
	function validateEmail(sEmail) {
		if ( !sEmail ) {
			return true;
		}
		var emails = sEmail.split(',');
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		var flag = false;
		for  ( var i = 0; i < emails.length; i++ ) {
			if (filter.test(emails[i])) {
				flag = true;
			}
			else {
				flag = false;
			}
		}
		return flag;
	}
    function wsc_show_share_cart_popup() {
        jQuery('.wsc_popup_layer').show();
        jQuery('.wsc_share_cart_popup').show();
    }
	function wsc_show_save_cart_popup() {
		jQuery('.wsc_save_popup_layer').show();
        jQuery('.wsc_save_share_cart_popup').show();
	}
	function wsc_hide_save_cart_popup() {
		jQuery('.wsc_save_popup_layer').hide();
        jQuery('.wsc_save_share_cart_popup').hide();
	}
	function wsc_show_replace_cart_popup() {
		jQuery('.wsc_popup_replace_layer').show();
        jQuery('.wsc_replace_cart_popup').show();
	}
	function wsc_hide_replace_cart_popup() {
		jQuery('.wsc_popup_replace_layer').hide();
        jQuery('.wsc_replace_cart_popup').hide();
	}
    jQuery( document ).ready( function() {
// 		jQuery(window).on('load', function() {
// 			setTimeout(function() {
// 				var a = jQuery('<a>', {
// 					href: window.location.href
// 				});
// 			   var is_sharecart = a.prop('search');
// 				var data = {
// 					action:'wsc_retrieve_cart',
// 					cart_link: window.location.href,
// 					security:wsc_frontend.ajax_nonce,
// 				};
// 				jQuery.post(wsc_frontend.ajaxurl, data, function( resp){
// 					if ( resp.success ) {
// 						if ( is_sharecart.indexOf("share-cart") == 1 ) {
// 							window.location.replace(resp.data);
// 						}
// 					}
// 				});
// 			}, 1000);
// 		});
        jQuery(document).on('click', '.wsc_email', function() {
            jQuery('.wsc_sharing_widgets').hide();
            jQuery('.wsc_email_fields').show();
            jQuery('.wsc_email_fields').find('div').show();
            jQuery('.wsc_popup_footer').show();
			jQuery('.wsc_success_message').hide();
        });
        jQuery(document).on('click', '.wsc_popup_footer', function() {
            jQuery('.wsc_email_fields').hide();
            jQuery('.wsc_sharing_widgets').show();
            jQuery('.wsc_copied_text').hide();
            jQuery('.wsc_sent_email').hide();
            jQuery('.wsc_popup_footer').hide();
        });
        jQuery(document).on('click', '.wsc_print', function(e) {
            e.preventDefault();
            if ( wsc_frontend.user_print_lib == 'yes' ) {
                jQuery('.wsc_share_cart_loader').show();
                jQuery('.wsc_sharing_widgets').hide();
                var data = {
                    action : 'wsc_printthis_ajax',
					cart_url: jQuery('.wsc_copy_link').val(),
                    security : wsc_frontend.ajax_nonce
                };
                jQuery.post(wsc_frontend.ajaxurl, data, function( response ) {
                    jQuery('.wsc_print_cart_content_printthis').html(response.data);
                    jQuery('.wsc_print_cart_content_printthis').show();
                    jQuery('.wsc_print_cart_content_printthis').printThis({
                        importCSS: false,
						header: '<style>'+wsc_frontend.custom_css+'</style>'
                    });
                    setTimeout(function(){
                    jQuery('.wsc_print_cart_content_printthis').hide();
                    jQuery('.wsc_share_cart_loader').hide();
                    hide_share_cart_popup();
                    }, 3000);
                });
            } else {
                jQuery('.wsc_sharing_widgets').hide();
                jQuery('.wsc_share_cart_loader').show();
                jQuery.ajax( {
                    type: 'post',
                    url: wsc_frontend.cart_print+'&cart_url='+jQuery('.wsc_copy_link').val(),
                    dataType: 'html',
                    success:  function( response ) {
                        var respons = jQuery('<output>').append(jQuery.parseHTML(response));
                        var cart_print = jQuery('.wsc-share-cart-print', respons);
                        printDiv(cart_print.html());
                        jQuery('.wsc_share_cart_loader').hide();
                        jQuery('.wsc_sharing_widgets').show();
                    },
                    complete: function() {
                        
                    }
                });
            }
        });
        function hide_share_cart_popup() {
            jQuery('.wsc_popup_layer').hide();
            jQuery('.wsc_share_cart_popup').hide();
        }
        jQuery(document).on('click', '.wsc_send_cart', function( e ) {
            e.preventDefault();
			var replyto = wsc_frontend.replyto_field;
            jQuery('.wsc_share_cart_loader').show();
            var email = jQuery('.wsc_user_email').val();
			var replyto_email = jQuery('.wsc_replyto_email').val();
            var subject = jQuery('.wsc_email_subject').val();
            var body = jQuery('.wsc_email_message').val();
            var cart_id = jQuery('.wsc_cart_id').val();
            jQuery('.wsc_email_field').find('span').remove();
			jQuery('.wsc_replytoemail_field').find('span').remove();
            jQuery('.wsc_name').find('span').remove();
            if ( email == '' || subject == '' ) {
                jQuery('.wsc_name').append('<span>'+wsc_frontend.name_label+'</span>');
                jQuery('.wsc_email_field').append('<span>'+wsc_frontend.email_label+'</span>');
                jQuery('.wsc_share_cart_loader').hide();
                return;
            }
			if ( 'yes' == replyto && '' == replyto_email ) {
				jQuery('.wsc_replytoemail_field').append('<span>'+wsc_frontend.email_label+'</span>');
                jQuery('.wsc_share_cart_loader').hide();
                return;
			}
            if( !validateEmail(email) ) {
                jQuery('.wsc_email_field').append('<span>'+wsc_frontend.email_warning+'</span>');
                jQuery('.wsc_share_cart_loader').hide();
                return;
            }
			if( !validateEmail(replyto_email) ) {
                jQuery('.wsc_replytoemail_field').append('<span>'+wsc_frontend.email_warning+'</span>');
                jQuery('.wsc_share_cart_loader').hide();
                return;
            }
            jQuery('.wsc_email_field').find('span').remove();
            jQuery('.wsc_name').find('span').remove();
            var data = {
                wsc_email: email,
				replyto_email: replyto_email,
                wsc_subject: subject,
                wsc_body: body,
                cart_id: cart_id
            };
            jQuery.ajax( {
                type: 'POST',
                url: wsc_frontend.cart_email,
                data: data,
                dataType: 'html',
                success:  function( response ) {
                    jQuery('.wsc_email_fields').find('div').hide();
                    jQuery('.wsc_sent_email').show();
                    jQuery('.wsc_popup_footer').show();
                    jQuery('.wsc_share_cart_loader').hide();
                },
                complete: function() {
                }
            });
        });
        jQuery(document).on('click', '.wsc_share_cart', function( e ) {
            e.preventDefault();
			var obj = jQuery(this);
			var cart_id = obj.attr('data-cart-id');
            wsc_show_share_cart_popup();
            jQuery('.wsc_cart_to_quote').find('form').show();
            jQuery('.wsc_cart_to_quote').hide();
            jQuery('.wsc_share_cart_loader').show();
            jQuery('.wsc_copied_text').hide();
            jQuery('.wsc_sharing_widgets').html('');
            jQuery('.wsc_sharing_widgets').show();
            jQuery('.wsc_email_fields').hide();
            jQuery('.wsc_popup_footer').hide();
            var data = {
                'action' : 'wsc_generate_get_share_cart',
				'cart_id' : cart_id,
				'security' : wsc_frontend.ajax_nonce
            };
            jQuery.post(wsc_frontend.ajaxurl, data, function( response ) {
                jQuery('.wsc_share_cart_loader').hide();
                if ( wsc_frontend.module_functionality == '' ) {
                    jQuery('.wsc_sharing_widgets').html(response.data.icons);
                } else {
                    jQuery('.wsc_cart_to_quote').find('.wsc_cart_id').val(response.data.cart_id);
                    jQuery('.wsc_cart_to_quote').show();
                }
                if ( response.data.success_msg != null ) {
                    jQuery('.wsc_copied_text').html(response.data.success_msg);
                }
            });
        });
		jQuery(document).on('click', '.wsc_popup_replace_layer', function() {
			wsc_hide_replace_cart_popup();
		});
		jQuery(document).on('click', '.wsc_save_popup_layer', function() {
			wsc_hide_save_cart_popup();
		});
		jQuery(document).on('click', '.wsc_save_share_cart', function( e ) {
            e.preventDefault();
			jQuery('.wsc_save_popup_content').show().find('input.wsc_save_cart_title').val('');
			jQuery('.wsc_save_popup_content').find('.wsc_valid_error').hide();
            wsc_show_save_cart_popup();
        });
		jQuery(document).on('click', '.wsc_save_replace_cart', function( e ) {
            e.preventDefault();
			jQuery('.wsc_replace_popup_content').hide();
			wsc_show_replace_cart_popup();
			jQuery('.wsc_share_cart_loader').show();
			var data = {
                'action' : 'wsc_replace_saved_cart',
				'security' : wsc_frontend.ajax_nonce,
				cart_id : jQuery(this).attr('data-cart-id'),
            };
            jQuery.post(wsc_frontend.ajaxurl, data, function( response ) {
                jQuery('.wsc_share_cart_loader').hide();
				if (response.success) {
					jQuery('.wsc_replace_popup_content').show();
					if ( wsc_frontend.flush_on_replace == 'yes' ) {
						location.reload();
					}
				}
            });
        });
		jQuery(document).on('click', '.wsc_save_cart_save, .wsc_save_cart_continue', function(e){
			e.preventDefault();
			var obj = jQuery(this);
			obj.closest('.wsc_save_popup_content').show();
			var type = 'save';
			if ( obj.hasClass('wsc_save_cart_continue') ) {
				type = 'continue';
			}
			var title = obj.closest('.wsc_save_popup_content').find('input.wsc_save_cart_title').val();
			if ( jQuery.trim(title) == '' ) {
				obj.closest('.wsc_save_popup_content').find('.wsc_valid_error').show();
				return;
			} else {
				obj.closest('.wsc_save_popup_content').find('.wsc_valid_error').hide();
			}
			obj.closest('.wsc_save_popup_content').hide();
			jQuery('.wsc_save_share_cart_popup .wsc_share_cart_loader').show();
			jQuery('.wsc_share_cart_loader').show();
			var data = {
                'action' : 'wsc_generate_cart_link',
				'security' : wsc_frontend.ajax_nonce,
				'title' : title,
				'type' : type
            };
            jQuery.post(wsc_frontend.ajaxurl, data, function( response ) {
                jQuery('.wsc_share_cart_loader').hide();
				if (response.success) {
					if ( 'save' == type ) {
						jQuery('.save_cart_notification').remove();
						jQuery('.wsc-form-field:first').append('<p class="save_cart_notification">'+response.data.notification+'</p>');
						obj.closest('.wsc_save_popup_content').show();
						jQuery('.wsc_save_share_cart_btns .wsc_share_cart').attr('data-cart-id', response.data.cart_id);
						jQuery('.wsc_save_share_cart_btns .wsc_save_replace_cart').attr('data-cart-id', response.data.cart_id).show();
						if ( wsc_frontend.flush_on_save == 'yes' ) {
							location.reload();
						}
					} else {
						jQuery('.wsc_save_share_cart_btns .wsc_share_cart').attr('data-cart-id', response.data.cart_id);
						jQuery('.wsc_save_share_cart_btns .wsc_save_replace_cart').attr('data-cart-id', response.data.cart_id).show();
						jQuery('.wsc_share_cart_popup .wsc_sharing_widgets').html(response.data.icons).show();
						jQuery('.wsc_share_cart_popup .wsc_copied_text').hide();
						jQuery('.wsc_share_cart_popup .wsc_email_fields').hide();
						jQuery('.wsc_share_cart_popup .wsc_popup_footer').hide();
						wsc_hide_save_cart_popup();
						wsc_show_share_cart_popup();
					}
					jQuery('.wsc_save_cart_title').val('');
				}
            });
		});
		jQuery(document).on('click', '.wsc_share_popup_close, .wsc_save_popup_layer', function() {
			jQuery('.wsc_save_share_cart_popup').hide();
			jQuery('.wsc_save_popup_layer').hide();
			jQuery('.save_cart_notification').hide();
		});
        jQuery(document).on('click', '.wsc_popup_close, .wsc_popup_layer', function() {
            hide_share_cart_popup();
            jQuery('.wsc_sent_email').hide();
			wsc_hide_save_cart_popup();
        });
		jQuery(document).on('click', '.wsc_replace_popup_close', function() {
            jQuery('.wsc_popup_layer').hide();
            jQuery('.wsc_share_cart_popup').hide();
            jQuery('.wsc_sent_email').hide();
			wsc_hide_replace_cart_popup();
        });
        jQuery(document).on('click', '.wsc_copy_url', function() {
            jQuery('.wsc_copy_link').attr('type', 'text');
			var copy_link_text = wsc_frontend.on_success_copy;
			copy_link_text = copy_link_text.replace('{cart_url}', jQuery('.wsc_copy_link').val());
			jQuery('.wsc_copied_link_text').html(copy_link_text);
            jQuery('.wsc_copy_link').focus();
            jQuery('.wsc_copy_link').select();
            document.execCommand('copy')
            jQuery('.wsc_copy_link').attr('type', 'hidden');
            jQuery('.wsc_copied_text').show();
            jQuery('.wsc_copied_text').find('span').show();
                jQuery('.wsc_loginfirst').hide();
            jQuery('.wsc_popup_footer').show();
            jQuery('.wsc_sharing_widgets').hide();
        });
        jQuery(document).on('click', '.wsc_save_cart', function() {
            jQuery('.wsc_copy_link').attr('type', 'text');
            jQuery('.wsc_copy_link').focus();
            jQuery('.wsc_copy_link').select();
            document.execCommand('copy')
            jQuery('.wsc_copy_link').attr('type', 'hidden');
            jQuery('.wsc_copied_text').show();
			jQuery('.wsc_copied_text').show();
            if ( wsc_frontend.is_user_logged_in == 0 ) {
				jQuery('.wsc_copied_text').find('span').hide();
                jQuery('.wsc_copied_text').find('span').hide();
                jQuery('.wsc_loginfirst').show();
            }
            jQuery('.wsc_popup_footer').show();
            jQuery('.wsc_sharing_widgets').hide();
        });
        jQuery(document).on('click', '.wsc_remove_cart', function() {
            jQuery(this).closest('td').find('.wsc_share_cart_loader').show();
            var cart_id = jQuery(this).attr('data-cart_id');
            var data = {
                'action'   : 'wsc_remove_cart',
                'cart_id'  : cart_id,
				'security' : wsc_frontend.ajax_nonce,
				'current_user_id' : wsc_frontend.is_user_logged_in,	
            };
            var obj = jQuery(this);
            jQuery.post(wsc_frontend.ajaxurl, data, function( response ) {
                obj.closest('tr').remove();
                if ( jQuery('.wsc_cart table').find('tr').length < 2 ) {
                    jQuery('.wsc_cart').html(response.data);
                }
                obj.closest('.wsc_cart').find('.wsc_share_cart_loader').hide();
            });
        });
        jQuery('#wsc_submit_quote').on('click', function( e ) {
            e.preventDefault();
            var wsc_button = jQuery(this);
            var wsc_form = jQuery(this).closest('form');
            wsc_button.attr('disabled', 'disabled');
            jQuery('.wsc_share_cart_loader').show();
            jQuery('.wsc_sent_email').hide();
            jQuery.ajax( {
                type: 'POST',
                url: wsc_frontend.cart_url+'?wc-wsc&nounce='+wsc_frontend.ajax_nonce,
                data: wsc_form.serialize(),
                dataType: 'html',
                success:  function( response ) {
                    var response = jQuery.parseJSON(response);
                    if ( response.success == false ) {
                        var validation = response;
                        if ( validation.data.validation ) {
                            jQuery.each(validation.data.validation, function(k,v){
                                if(wsc_form.find('#'+k+'_field .wsc_error').length>0){
                                    wsc_form.find('#'+k+'_field .wsc_error').html(v);
                                }else{
                                    wsc_form.find('#'+k+'_field').append('<span class="wsc_error">'+v+'</span>');
                                }
                            });
                        }
                    }
                    jQuery('.lds-ellipsis').hide();
                    wsc_button.removeAttr('disabled');
                },
                complete: function() {
                    wsc_button.removeAttr('disabled');
                    jQuery('.wsc_cart_to_quote').find('form').hide();
                    jQuery('.wsc_cart_to_quote').find('.wsc_sent_email').show();
                    jQuery('.wsc_share_cart_loader').hide();
                }
            });
        });
    });
})(jQuery);