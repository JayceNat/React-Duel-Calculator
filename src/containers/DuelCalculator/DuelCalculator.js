import React, { Component } from 'react';
import classes from './DuelCalculator.module.css';
import Aux from '../../hoc/Auxiliary';
import Modal from '../../components/Overlay/Modal/Modal';
import ChangeAvatar from '../../components/Overlay/ModalContents/ChangeAvatar/ChangeAvatar';
import PlayerArea from '../PlayerArea/PlayerArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import FooterArea from '../FooterArea/FooterArea';
import * as modalTypes from '../../store/modals';

class DuelCalculator extends Component {
    render () {
        return (
            <Aux>
                <Modal
                    show={this.props.showModal}
                    modalClosed={this.props.onModalClosed}>
                    <ChangeAvatar
                        player={this.props.modalPlayerSetting}
                        show={this.props.modalContent === modalTypes.CHANGE_AVATAR}
                        clicked={this.props.onAvatarChanged} />
                </Modal>
                <div className={classes.duelCalculator}>
                    <div className={classes.playerAreas}>
                        <div className={classes.playerOneArea}>
                            <PlayerArea
                                playerNumber={'player1'}
                                playerAvatar={this.props.avatars.player1}
                                playerAvatarChanging={this.props.onAvatarChanging}
                                playerName={this.props.names.player1}
                                playerNameChanged={this.props.onNameChanged}
                                playerLifePoints={this.props.lifePoints.player1}
                                lifePointButtonClicked={this.props.onLifePointButtonClicked}
                                playerHealthPercent={this.props.healthPercents.player1}
                                halfButtonClicked={this.props.onHalfButtonClicked}
                                plusButtonClicked={this.props.onPlusButtonClicked}
                                minusButtonClicked={this.props.onMinusButtonClicked}
                                playerControlDisabled={this.props.ctrVal <= 0}
                                gameIsReset={this.props.resetState} />
                        </div>
                        <div className={classes.playerTwoArea}>
                            <PlayerArea 
                                playerNumber={'player2'}
                                playerAvatar={this.props.avatars.player2}
                                playerAvatarChanging={this.props.onAvatarChanging}
                                playerName={this.props.names.player2}
                                playerNameChanged={this.props.onNameChanged}
                                playerLifePoints={this.props.lifePoints.player2}
                                lifePointButtonClicked={this.props.onLifePointButtonClicked}
                                playerHealthPercent={this.props.healthPercents.player2}
                                halfButtonClicked={this.props.onHalfButtonClicked}
                                plusButtonClicked={this.props.onPlusButtonClicked}
                                minusButtonClicked={this.props.onMinusButtonClicked}
                                playerControlDisabled={this.props.ctrVal <= 0}
                                gameIsReset={this.props.resetState} />
                        </div>
                    </div>
                    <div className={classes.globalArea}>
                        <GlobalArea 
                            pointCounterValue={this.props.ctrVal} 
                            clearCounterButtonClicked={this.props.onClearCounterClicked}
                            counterAddButtonClicked={this.props.onCounterAddClicked} />
                    </div>
                    <FooterArea 
                        isNewGameState={this.props.newGameState} 
                        newGameClicked={this.props.onNewGameClicked}
                        resetButtonClicked={this.props.onResetClicked} />
                </div>
            </Aux>
        );
    }
}

export default DuelCalculator;