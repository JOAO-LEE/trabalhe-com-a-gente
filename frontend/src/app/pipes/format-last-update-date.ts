import { Pipe, PipeTransform } from "@angular/core";
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Pipe({
    standalone: true,
    name: "updatedAt"
})

export class FormatLastUpdateDate implements PipeTransform {

    transform(value: string | Date, prefix: string = 'Updated'): string {
        if (!value) return '';

        try {
            const date = typeof value === 'string' ? new Date(value) : value;

            if (isNaN(date.getTime())) {
                return 'Invalid date';
            }

            const timeAgo = formatDistanceToNow(date, {
                addSuffix: true,
                locale: enUS
            });

            return `${prefix} ${timeAgo}`;

        } catch (error) {
            return 'Invalid date';
        }
    }
}