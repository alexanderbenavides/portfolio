
import { FooterModel } from '../../../../models/components/shared/layout';
import './Footer.scss';
const JsonData: FooterModel.JsonData[] = require('./footer.json');
export function Footer() {   
    const goToPages = (url: string) => {
        window.open(
            url,
            '_blank'
        );
    }
    return (
        <footer>
            {
                JsonData.map(json => (
                <i key={json.url} className={'fa-brands ' + json.icon} onClick={() => goToPages(json.url)}></i>
                ))
            }
        </footer>
    );
}

