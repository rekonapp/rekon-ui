evenPicServices.factory('AlertMessage', function() {
	const template = [
		'<div class="alert alert-{status} alert-top-center" role="alert" style="z-index: 1051; background: white; width: 500px;">',
            '<h4 class="alert-title">{title}</h4>',
        '</div>'
	];

	const renderTemplate = ({ title, subtitle, status }) => {
        const parsedTemplate = template.join(' ');
       
		return parsedTemplate.replace(/\{[a-z]+\}/gi, match => {
			if (match === '{status}') {
				return status;
			}

			if (match === '{title}') {
				return title;
			}

			if (match === '{subtitle}') {
				return subtitle;
			}
		});
	}

	return {
		open: function({ title, subtitle, status, time }) {
			let markup;

			const body = jQuery('body');
			let alertMessage = body.find('alert');

			if (!title) {
				return;
			}

            if (subtitle) {
                template.splice(2, 1, '<div class="text-muted">{subtitle}</div>');
            }

			status = status || 'success';

			if (alertMessage.length) {
				alertMessage.remove();
			}

			markup = renderTemplate({ title, subtitle, status});

			body.append(markup);

			alertMessage = body.find('div.alert');

			window.setTimeout(function() {
				alertMessage.remove();
			}, time || 3000);
		}
	};
});
