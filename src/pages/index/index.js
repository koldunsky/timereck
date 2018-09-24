import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../public/actions/app';
// import RecButton from '../../components/molecules/RecButton/index';
import Header from '../../components/organizms/header/index';
import Table from '../../components/molecules/TaskTable/index';
import DownloadBtn from '../../components/molecules/DownloadBtn/index';
import UploadBtn from '../../components/molecules/UploadBtn/index';

class Index extends Component {
    render() {
        return(
            <div>
                <Header />
                <Table />
                <DownloadBtn />
                <UploadBtn />
            </div>
        );

    }
}


const mapStateToProps = state => ({
    app: state.app
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
