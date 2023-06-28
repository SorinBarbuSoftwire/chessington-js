import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentPos = board.findPiece(this);
        if(this.player == Player.WHITE) {
            return [Square.at(currentPos.row + 1, currentPos.col)];
        } else {
            return [Square.at(currentPos.row - 1, currentPos.col)];
        }
    }
}
